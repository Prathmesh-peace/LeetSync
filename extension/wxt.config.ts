import { defineConfig } from "wxt";

export default defineConfig({
  modules: ["@wxt-dev/module-react"],

  manifest: {
    permissions: [
      "identity",
      "storage",
    ],

    host_permissions: [
      "https://leetcode.com/*",
      "https://github.com/*",
      "https://api.github.com/*",
      "http://localhost:5000/*",
    ],
  },
});