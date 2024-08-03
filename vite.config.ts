import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	publicDir: "./public",
	plugins: [react()],

	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	server: {
		host: true,
		open: !("SANDBOX_URL" in process.env || "CODESANDBOX_HOST" in process.env),
	},
});
