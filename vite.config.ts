import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      protocol: "wss", // ضروري لـ HTTPS عبر Ngrok
      host: " https://0b5f12e0f0cf.ngrok-free.app git init", // 🔹 استبدل هذا بالرابط من Ngrok كل تشغيل
      clientPort: 443, // المنفذ الصحيح لـ HTTPS
    },
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
