import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
    base: "./",
    build: {
        outDir: "./docs"
    },
    plugins: [
        VitePWA({
            registerType: "autoUpdate",
            includeAssets: ["pwa-192x192.png", "pwa-512x512.png", "favicon.ico", "maskable.svg"],
            manifest: {
                name: "Vite PWA",
                short_name: "Vite PWA",
                description: "My Awesome App description",
                theme_color: "#de260d",
                icons: [
                    {
                        src: "pwa-192x192.png",
                        sizes: "192x192",
                        type: "image/png"
                    },
                    {
                        src: "pwa-512x512.png",
                        sizes: "512x512",
                        type: "image/png"
                    },
                    {
                        src: "maskable.svg",
                        sizes: "512x512",
                        type: "image/svg+xml",
                        purpose: "any maskable"
                    }
                ]
            }
        })
    ]
});
