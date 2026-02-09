import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider, useAuth } from "./context/AuthContext";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Scan from "./pages/Scan";
import Treatments from "./pages/Treatments";
import History from "./pages/History";
import Profile from "./pages/Profile";
import Report from "./pages/Report";
import Onboarding from "./pages/Onboarding";

// 👇 small helper to warm the backend & expose API base in dev
import { waitForBackendReady, API_BASE } from "./api/client";

/** Returns /home or /onboarding depending on auth + localStorage("onboarded") */
const LandingRedirect: React.FC = () => {
  const { auth } = useAuth() as any;
  const isAuthed = !!auth?.token;
  const onboarded = localStorage.getItem("onboarded") === "true";

  if (!isAuthed) return <Navigate to="/onboarding" replace />;
  return <Navigate to={onboarded ? "/home" : "/onboarding"} replace />;
};

/** Blocks access to private routes until onboarding is done */
const OnboardingGate: React.FC = () => {
  const { auth } = useAuth() as any;
  const isAuthed = !!auth?.token;
  const onboarded = localStorage.getItem("onboarded") === "true";
  const loc = useLocation();

  if (isAuthed && !onboarded && loc.pathname !== "/onboarding") {
    return <Navigate to="/onboarding" replace />;
  }
  return <Outlet />;
};

/** If already onboarded, skip onboarding page and go home */
const OnboardingEntry: React.FC = () => {
  const { auth } = useAuth() as any;
  const isAuthed = !!auth?.token;
  const onboarded = localStorage.getItem("onboarded") === "true";

  if (isAuthed && onboarded) return <Navigate to="/home" replace />;
  return <Onboarding />;
};

const AppShell: React.FC = () => {
  const loc = useLocation();

  // Hide navbar on auth/onboarding pages
  const hideNav = useMemo(() => {
    return ["/login", "/signup", "/onboarding"].includes(loc.pathname);
  }, [loc.pathname]);

  // Warm backend (good for Render free-tier cold starts)
  const [bootMsg, setBootMsg] = useState<string>("");

  useEffect(() => {
    if (import.meta.env.DEV) {
      // Helpful for quick verification in the console
      // Should print: https://aesthetic-ai-backend.onrender.com in prod builds
      // and "/api" in dev if you use Vite proxy
      // (or your custom VITE_API_BASE if set)
      // eslint-disable-next-line no-console
      console.log("API_BASE =", API_BASE);
    }
    let mounted = true;
    (async () => {
      try {
        setBootMsg("Connecting to server…");
        await waitForBackendReady();
      } catch {
        // eslint-disable-next-line no-console
        console.warn("Backend did not respond yet; UI will retry on demand.");
      } finally {
        if (mounted) setBootMsg("");
      }
    })();
    return () => { mounted = false; };
  }, []);

  return (
    <>
      {!hideNav && <NavBar />}

      {/* Tiny non-blocking status line during cold start */}
      {bootMsg && (
        <div style={{ padding: "6px 12px", fontSize: 12, opacity: 0.8 }}>
          {bootMsg}
        </div>
      )}

      <div>
        <Routes>
          {/* Smart landing */}
          <Route path="/" element={<LandingRedirect />} />

          {/* Public pages */}
          <Route path="/onboarding" element={<OnboardingEntry />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Private area: must be authed AND (via OnboardingGate) onboarded */}
          <Route element={<ProtectedRoute />}>
            <Route element={<OnboardingGate />}>
              <Route path="/home" element={<Home />} />
              <Route path="/scan" element={<Scan />} />
              <Route path="/treatments" element={<Treatments />} />
              <Route path="/history" element={<History />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/report/:id" element={<Report />} />
            </Route>
          </Route>

          {/* Fallback */}
          <Route path="*" element={<LandingRedirect />} />
        </Routes>
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppShell />
    </AuthProvider>
  );
};

export default App;
