import { defineConfig } from "wxt";

export default defineConfig({
  modules: ["@wxt-dev/module-react"],

  manifest: {
    name: "LeetSync",
    short_name: "LeetSync",
    description: "Automatically sync accepted LeetCode solutions to GitHub",
    version: "1.1.0",

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