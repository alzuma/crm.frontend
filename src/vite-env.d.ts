/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Base address of the CRM backend API, e.g. http://localhost:5080. */
  readonly VITE_API_BASE_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
