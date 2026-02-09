/// <reference types="vite/client" />

// (optional) declare your env variables so TS knows they exist and are strings
interface ImportMetaEnv {
  readonly VITE_API_URL?: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
