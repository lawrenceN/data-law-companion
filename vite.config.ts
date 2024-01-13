import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  // base:"https://dev.datalawcompanion.org/",
  base:"https://datalawcompanion.org/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto", //register service worker
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"], // service worker precache (resources to be downloaded for offline access)
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
