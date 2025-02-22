/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  // Kerak bo‘lsa, boshqa muhit o‘zgaruvchilarini qo‘shing
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
