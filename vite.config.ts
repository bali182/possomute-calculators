import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export const ViteConfig = defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
});

export default ViteConfig;
