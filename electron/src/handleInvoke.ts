import { app } from "electron";
import { join } from "node:path";
import { readFileSync, writeFileSync } from "node:fs";

export const handleInvoke = {
  getConfig() {
    const userDataPath = app.getPath("userData");
    const configPath = join(userDataPath, "test.json");

    const content = readFileSync(configPath, { encoding: "utf8" });
    return content;
  },
  setConfig(event, content) {
    const userDataPath = app.getPath("userData");
    const configPath = join(userDataPath, "test.json");

    writeFileSync(configPath, content);

    return "success";
  },

  sayHello123() {
    return "hello 123";
  },
};
