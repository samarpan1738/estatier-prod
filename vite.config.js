import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@honkhonk/vite-plugin-svgr";
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    return {
        plugins: [react(), svgr()],
        resolve: {
            alias: [{ find: '@src', replacement: path.resolve(__dirname, 'src') }],
        },

    };
});
