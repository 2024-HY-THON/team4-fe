import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],

      manifest: {
        name: "숨,",
        short_name: "숨,",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        icons: [
          {
            purpose: "maskable",
            sizes: "48x48",
            src: "icons/maskable_icon_x48.png",
            type: "image/png",
          },
          {
            purpose: "maskable",
            sizes: "72x72",
            src: "icons/maskable_icon_x72.png",
            type: "image/png",
          },
          {
            purpose: "maskable",
            sizes: "96x96",
            src: "icons/maskable_icon_x96.png",
            type: "image/png",
          },
          {
            purpose: "maskable",
            sizes: "128x128",
            src: "icons/maskable_icon_x128.png",
            type: "image/png",
          },
          {
            purpose: "maskable",
            sizes: "192x192",
            src: "icons/maskable_icon_x192.png",
            type: "image/png",
          },
          {
            purpose: "maskable",
            sizes: "384x384",
            src: "icons/maskable_icon_x384.png",
            type: "image/png",
          },
          {
            purpose: "maskable",
            sizes: "512x512",
            src: "icons/maskable_icon_x512.png",
            type: "image/png",
          },
        ],
      },
    }),
  ],

  resolve: {
    alias: [
      { find: "@apis", replacement: resolve(__dirname, "src/apis") },
      { find: "@assets", replacement: resolve(__dirname, "src/assets") },
      {
        find: "@components",
        replacement: resolve(__dirname, "src/components"),
      },
      {
        find: "@constant",
        replacement: resolve(__dirname, "src/constant"),
      },
      { find: "@hooks", replacement: resolve(__dirname, "src/hooks") },
      { find: "@pages", replacement: resolve(__dirname, "src/pages") },
      { find: "@store", replacement: resolve(__dirname, "src/store") },
      { find: "@type", replacement: resolve(__dirname, "src/type") },
      { find: "@utils", replacement: resolve(__dirname, "src/utils") },
    ],
  },
});
