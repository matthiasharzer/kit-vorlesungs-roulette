/// <reference types="svelte" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_CORS_PROXY_SERVER_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
