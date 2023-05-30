import { app, BrowserWindow } from "electron";
import { join } from "node:path";
import { readFileSync, writeFileSync } from "node:fs";

export const onSend = {
  setTitle(event, title) {
    const webContents = event.sender;
    const win = BrowserWindow.fromWebContents(webContents);
    win.setTitle(title);
  },
};
