if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let f={};const t=e=>n(e,o),c={module:{uri:o},exports:f,require:t};i[o]=Promise.all(r.map((e=>c[e]||t(e)))).then((e=>(s(...e),f)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-bc438f99.js",revision:null},{url:"index.html",revision:"58ac6d8fc14702e926cc7b7f4ff9d683"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"pwa-192x192.png",revision:"734d935f2adf000309f6c3d218f121af"},{url:"pwa-512x512.png",revision:"83d7a9931714f5e1fcbe27ac862e2a42"},{url:"favicon.ico",revision:"c13bbae56ec9a1a96a508cb367181fb8"},{url:"maskable.svg",revision:"62131cee9d25506a80d73157f36f26e1"},{url:"manifest.webmanifest",revision:"6a4a1229e260830e7469affe27b3346b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));