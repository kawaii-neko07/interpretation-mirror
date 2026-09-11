import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Działa lokalnie i w podfolderze repozytorium GitHub Pages.
  base: "./",
  plugins: [react()],
  server: { open: true },
});
