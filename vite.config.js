import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    // Creating proxy
    server: {
        proxy: {
            //- every request that starts with /api iaadd yung target url sa unahan
            "/api": {
                target: "http://localhost:5000",
                secure: false,
            },
        },
    },
    plugins: [react()],
});
