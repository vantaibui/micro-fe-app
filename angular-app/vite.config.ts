import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    federation({
      name: "angularApp",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/app/app.component.ts",
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"],
    }),
  ],
  build: {
    target: "esnext",
  },
  server: {
    port: 3002,
  },
});
