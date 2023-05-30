import { handleInvoke } from "./handleInvoke";
import { onSend } from "./onSend";

export const api = { handleInvoke, onSend } as const;

export type API_TYPE = typeof api;
