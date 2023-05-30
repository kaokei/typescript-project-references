import { contextBridge, ipcRenderer } from "electron";

import { api } from "../src/index";

const ELECTRON_API = {} as any;

const keys1 = Object.keys(api.handleInvoke);
for (const key of keys1) {
  ELECTRON_API[key] = (...args) => ipcRenderer.invoke(key, ...args);
}

const keys2 = Object.keys(api.onSend);
for (const key of keys2) {
  ELECTRON_API[key] = (...args) => ipcRenderer.send(key, ...args);
}

contextBridge.exposeInMainWorld("electronAPI", ELECTRON_API);
