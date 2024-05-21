import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import react from '@vitejs/plugin-react';

installGlobals();

export default defineConfig({
  plugins: [remix({ignoredRouteFiles: ["**/*.css"]}),
  tsconfigPaths()],
  css: {
    postcss: './postcss.config.js',
  },
});
