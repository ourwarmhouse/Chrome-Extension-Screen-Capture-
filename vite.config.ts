import { resolve } from "path";

import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { chromeExtension } from "vite-plugin-chrome-extension";
import ViteComponents from "vite-plugin-components";

import ViteIcons, { ViteIconsResolver } from "vite-plugin-icons";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  build: {
    rollupOptions: {
      input: "src/manifest.json"
    }
  },
  plugins: [
    reactRefresh(),
    ViteComponents({
      extensions: ["jsx"],
      // auto import icons
      customComponentResolvers: [
        // https://github.com/antfu/vite-plugin-icons
        ViteIconsResolver({
          componentPrefix: ""
          // enabledCollections: ['carbon']
        })
      ]
    }),
    ViteIcons(),
    chromeExtension()
  ]
});
