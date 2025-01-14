import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "reactApp",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/Button.tsx", // Expose the Button component
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3002,
  },
});
