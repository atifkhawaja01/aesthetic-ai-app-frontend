import { api, withRetries, waitForBackendReady } from "./client";

export type HistoryItem = {
  id: string;
  createdAt: string;
  summary: string;
};

export type Report = any;

// --------- Helpers ---------
function extractMemPath(files: { field: string; path: string }[], field: "front" | "left" | "right") {
  const hit = files.find((f) => f.field === field);
  if (!hit || !hit.path) throw new Error(`UPLOAD_MISSING_${field.toUpperCase()}`);
  return hit.path; // e.g. "mem:u123:front"
}

// Optional: surface common analysis errors nicely to the UI
export function humanizeAnalysisError(e: unknown): string {
  const msg: string = (e as any)?.response?.data?.error || (e as any)?.message || "";
  if (msg === "NO_FACE_DETECTED") return "No clear face detected. Try brighter light and keep your face centered.";
  if (msg === "ANALYSIS_TIMEOUT") return "Analysis took too long on the free server. Please try again.";
  return "Analysis failed. Please try again.";
}

// --------- Public API ---------

// Fetch all available treatments
export async function fetchTreatments() {
  await waitForBackendReady();               // wake Render (cold starts)
  await api.get("/preload").catch(() => {}); // warm model (cheap & safe)
  const { data } = await withRetries(() => api.get("/treatments"));
  return data;
}

// Fetch user’s report history
export async function fetchHistory(): Promise<HistoryItem[]> {
  await waitForBackendReady();
  const { data } = await withRetries(() => api.get<HistoryItem[]>("/history"));
  return data;
}

// Fetch a single report by ID
export async function fetchReport(id: string): Promise<Report> {
  await waitForBackendReady();
  const { data } = await withRetries(() => api.get<Report>(`/reports/${id}`));
  return data;
}

// Upload user’s face photos
export async function uploadPhotos(front: File, left: File, right: File) {
  await waitForBackendReady();
  // warm model before heavy operations
  await api.get("/preload").catch(() => {});

  const form = new FormData();
  form.append("front", front, "front.jpg");
  form.append("left", left, "left.jpg");
  form.append("right", right, "right.jpg");

  const { data } = await withRetries(() =>
    api.post("/uploads", form, {
      headers: { "Content-Type": "multipart/form-data" },
      timeout: 120_000, // uploads can be slow on mobile; give room
    })
  );

  // { uploadId, files: [{ field, path }, ...] }
  return data as {
    uploadId: string;
    files: { field: string; path: string }[];
  };
}

// Start analysis using the mem: paths returned by /uploads
export async function startAnalysisFromUploadResult(uploadResult: {
  uploadId: string;
  files: { field: string; path: string }[];
}) {
  const files = {
    front: extractMemPath(uploadResult.files, "front"),
    left: extractMemPath(uploadResult.files, "left"),
    right: extractMemPath(uploadResult.files, "right"),
  };
  return startAnalysis(files);
}

// Start analysis when you already have the 3 paths
export async function startAnalysis(files: { front: string; left: string; right: string }) {
  await waitForBackendReady();
  // warm again right before the heavy call (cheap no-op if already warm)
  await api.get("/preload").catch(() => {});
  const { data } = await withRetries(
    () =>
      api.post<Report>(
        "/analysis/start",
        { files },                 // MUST be { front|left|right: "mem:..." }
        { timeout: 180_000 }       // 3 min to survive free-tier cold boots
      ),
    { tries: 3, baseDelay: 1200 }  // mild retries for transient network
  );
  return data;
}
