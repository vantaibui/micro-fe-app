import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vue(),
    federation({
      name: "app-shell",
      remotes: {
        reactApp: "http://localhost:3001/assets/remoteEntry.js",
        angularApp: "angularApp@http://localhost:3002/assets/remoteEntry.js",
        vueApp: "vueApp@http://localhost:3003/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "vue"],
    }),
  ],
  build: {
    target: "esnext",
  },
  server: {
    port: 3000,
  },
});
