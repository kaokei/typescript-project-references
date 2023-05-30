import type { API_TYPE } from "../electron/src/index";

declare global {
  interface Window {
    electronAPI: PRELOAD_API_TYPE<API_TYPE>;
  }
}

export {};
