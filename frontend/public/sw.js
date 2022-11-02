if (!self.define) {
  let e,
    i = {};
  const a = (a, n) => (
    (a = new URL(a + ".js", n).href),
    i[a] ||
      new Promise((i) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = i), document.head.appendChild(e);
        } else (e = a), importScripts(a), i();
      }).then(() => {
        let e = i[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, t) => {
    const r =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[r]) return;
    let s = {};
    const o = (e) => a(e, r),
      c = { module: { uri: r }, exports: s, require: o };
    i[r] = Promise.all(n.map((e) => c[e] || o(e))).then((e) => (t(...e), s));
  };
}
define(["./workbox-588899ac"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/_5YcRS6yRvQoiSWA_XSPv/_buildManifest.js",
          revision: "7e32a79dd09a2aa55e654a32b12a156a",
        },
        {
          url: "/_next/static/_5YcRS6yRvQoiSWA_XSPv/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/1963b019-288de04e31af31aa.js",
          revision: "288de04e31af31aa",
        },
        {
          url: "/_next/static/chunks/434-e82133bcb7e0d495.js",
          revision: "e82133bcb7e0d495",
        },
        {
          url: "/_next/static/chunks/framework-7751730b10fa0f74.js",
          revision: "7751730b10fa0f74",
        },
        {
          url: "/_next/static/chunks/main-b6582f245bf11510.js",
          revision: "b6582f245bf11510",
        },
        {
          url: "/_next/static/chunks/pages/_app-87aabd58abad5fc4.js",
          revision: "87aabd58abad5fc4",
        },
        {
          url: "/_next/static/chunks/pages/_error-e4f561a102d9bb14.js",
          revision: "e4f561a102d9bb14",
        },
        {
          url: "/_next/static/chunks/pages/index-1380eb734022cd16.js",
          revision: "1380eb734022cd16",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-62c02dad1a6a4cb4.js",
          revision: "62c02dad1a6a4cb4",
        },
        {
          url: "/_next/static/css/267abafd6847553c.css",
          revision: "267abafd6847553c",
        },
        {
          url: "/_next/static/css/9d4b567cec9bb445.css",
          revision: "9d4b567cec9bb445",
        },
        {
          url: "/_next/static/media/Bookerly.c651680b.ttf",
          revision: "c651680b",
        },
        {
          url: "/_next/static/media/BookerlyBold.5944b839.ttf",
          revision: "5944b839",
        },
        {
          url: "/_next/static/media/BukhariScript.ba1e8164.ttf",
          revision: "ba1e8164",
        },
        {
          url: "/_next/static/media/inter-all-100-normal.28ad5822.woff",
          revision: "28ad5822",
        },
        {
          url: "/_next/static/media/inter-all-200-normal.cadc2927.woff",
          revision: "cadc2927",
        },
        {
          url: "/_next/static/media/inter-all-300-normal.de886920.woff",
          revision: "de886920",
        },
        {
          url: "/_next/static/media/inter-all-400-normal.2ae8ed37.woff",
          revision: "2ae8ed37",
        },
        {
          url: "/_next/static/media/inter-all-500-normal.56c3d87b.woff",
          revision: "56c3d87b",
        },
        {
          url: "/_next/static/media/inter-all-700-normal.f3163a49.woff",
          revision: "f3163a49",
        },
        {
          url: "/_next/static/media/inter-all-900-normal.bca024d2.woff",
          revision: "bca024d2",
        },
        {
          url: "/_next/static/media/inter-cyrillic-100-normal.ccab942a.woff2",
          revision: "ccab942a",
        },
        {
          url: "/_next/static/media/inter-cyrillic-200-normal.ae33dc94.woff2",
          revision: "ae33dc94",
        },
        {
          url: "/_next/static/media/inter-cyrillic-300-normal.2d6195a9.woff2",
          revision: "2d6195a9",
        },
        {
          url: "/_next/static/media/inter-cyrillic-400-normal.5122dff0.woff2",
          revision: "5122dff0",
        },
        {
          url: "/_next/static/media/inter-cyrillic-500-normal.017c512f.woff2",
          revision: "017c512f",
        },
        {
          url: "/_next/static/media/inter-cyrillic-700-normal.8b03fbd1.woff2",
          revision: "8b03fbd1",
        },
        {
          url: "/_next/static/media/inter-cyrillic-900-normal.52f0a05f.woff2",
          revision: "52f0a05f",
        },
        {
          url: "/_next/static/media/inter-cyrillic-ext-100-normal.e52df8a9.woff2",
          revision: "e52df8a9",
        },
        {
          url: "/_next/static/media/inter-cyrillic-ext-200-normal.39c0e735.woff2",
          revision: "39c0e735",
        },
        {
          url: "/_next/static/media/inter-cyrillic-ext-300-normal.65fcfcbf.woff2",
          revision: "65fcfcbf",
        },
        {
          url: "/_next/static/media/inter-cyrillic-ext-400-normal.06b6faa3.woff2",
          revision: "06b6faa3",
        },
        {
          url: "/_next/static/media/inter-cyrillic-ext-500-normal.563e11f7.woff2",
          revision: "563e11f7",
        },
        {
          url: "/_next/static/media/inter-cyrillic-ext-700-normal.7c668daa.woff2",
          revision: "7c668daa",
        },
        {
          url: "/_next/static/media/inter-cyrillic-ext-900-normal.b3ebc21f.woff2",
          revision: "b3ebc21f",
        },
        {
          url: "/_next/static/media/inter-greek-100-normal.20274389.woff2",
          revision: "20274389",
        },
        {
          url: "/_next/static/media/inter-greek-200-normal.9f6284c6.woff2",
          revision: "9f6284c6",
        },
        {
          url: "/_next/static/media/inter-greek-300-normal.2bd8943a.woff2",
          revision: "2bd8943a",
        },
        {
          url: "/_next/static/media/inter-greek-400-normal.d1deb2fe.woff2",
          revision: "d1deb2fe",
        },
        {
          url: "/_next/static/media/inter-greek-500-normal.599dd974.woff2",
          revision: "599dd974",
        },
        {
          url: "/_next/static/media/inter-greek-700-normal.54b722f0.woff2",
          revision: "54b722f0",
        },
        {
          url: "/_next/static/media/inter-greek-900-normal.5ca1f758.woff2",
          revision: "5ca1f758",
        },
        {
          url: "/_next/static/media/inter-greek-ext-100-normal.5f2e315d.woff2",
          revision: "5f2e315d",
        },
        {
          url: "/_next/static/media/inter-greek-ext-200-normal.5975ed7d.woff2",
          revision: "5975ed7d",
        },
        {
          url: "/_next/static/media/inter-greek-ext-300-normal.1040b196.woff2",
          revision: "1040b196",
        },
        {
          url: "/_next/static/media/inter-greek-ext-400-normal.2271c2a1.woff2",
          revision: "2271c2a1",
        },
        {
          url: "/_next/static/media/inter-greek-ext-500-normal.9ef8ce0d.woff2",
          revision: "9ef8ce0d",
        },
        {
          url: "/_next/static/media/inter-greek-ext-700-normal.5fb4f9ba.woff2",
          revision: "5fb4f9ba",
        },
        {
          url: "/_next/static/media/inter-greek-ext-900-normal.1f5a8d9e.woff2",
          revision: "1f5a8d9e",
        },
        {
          url: "/_next/static/media/inter-latin-100-normal.ac803252.woff2",
          revision: "ac803252",
        },
        {
          url: "/_next/static/media/inter-latin-200-normal.71082441.woff2",
          revision: "71082441",
        },
        {
          url: "/_next/static/media/inter-latin-300-normal.9c0edf75.woff2",
          revision: "9c0edf75",
        },
        {
          url: "/_next/static/media/inter-latin-400-normal.493934f7.woff2",
          revision: "493934f7",
        },
        {
          url: "/_next/static/media/inter-latin-500-normal.b7be75b9.woff2",
          revision: "b7be75b9",
        },
        {
          url: "/_next/static/media/inter-latin-700-normal.7ddf3c11.woff2",
          revision: "7ddf3c11",
        },
        {
          url: "/_next/static/media/inter-latin-900-normal.307c1a48.woff2",
          revision: "307c1a48",
        },
        {
          url: "/_next/static/media/inter-latin-ext-100-normal.6e569372.woff2",
          revision: "6e569372",
        },
        {
          url: "/_next/static/media/inter-latin-ext-200-normal.095c947d.woff2",
          revision: "095c947d",
        },
        {
          url: "/_next/static/media/inter-latin-ext-300-normal.e5c2b506.woff2",
          revision: "e5c2b506",
        },
        {
          url: "/_next/static/media/inter-latin-ext-400-normal.261aa6d4.woff2",
          revision: "261aa6d4",
        },
        {
          url: "/_next/static/media/inter-latin-ext-500-normal.47503116.woff2",
          revision: "47503116",
        },
        {
          url: "/_next/static/media/inter-latin-ext-700-normal.07491ea2.woff2",
          revision: "07491ea2",
        },
        {
          url: "/_next/static/media/inter-latin-ext-900-normal.a8149aa0.woff2",
          revision: "a8149aa0",
        },
        {
          url: "/_next/static/media/inter-vietnamese-100-normal.1743cbd0.woff2",
          revision: "1743cbd0",
        },
        {
          url: "/_next/static/media/inter-vietnamese-200-normal.8af71d47.woff2",
          revision: "8af71d47",
        },
        {
          url: "/_next/static/media/inter-vietnamese-300-normal.e33128e3.woff2",
          revision: "e33128e3",
        },
        {
          url: "/_next/static/media/inter-vietnamese-400-normal.ebde713a.woff2",
          revision: "ebde713a",
        },
        {
          url: "/_next/static/media/inter-vietnamese-500-normal.7b524ed3.woff2",
          revision: "7b524ed3",
        },
        {
          url: "/_next/static/media/inter-vietnamese-700-normal.00e401a9.woff2",
          revision: "00e401a9",
        },
        {
          url: "/_next/static/media/inter-vietnamese-900-normal.8d9d0e81.woff2",
          revision: "8d9d0e81",
        },
        {
          url: "/_next/static/media/pacifico-all-400-normal.6185d57a.woff",
          revision: "6185d57a",
        },
        {
          url: "/_next/static/media/pacifico-cyrillic-400-normal.a73ae5eb.woff2",
          revision: "a73ae5eb",
        },
        {
          url: "/_next/static/media/pacifico-cyrillic-ext-400-normal.933a59f6.woff2",
          revision: "933a59f6",
        },
        {
          url: "/_next/static/media/pacifico-latin-400-normal.11072613.woff2",
          revision: "11072613",
        },
        {
          url: "/_next/static/media/pacifico-latin-ext-400-normal.9b423d89.woff2",
          revision: "9b423d89",
        },
        {
          url: "/_next/static/media/pacifico-vietnamese-400-normal.f006ac05.woff2",
          revision: "f006ac05",
        },
        {
          url: "/assets/bg-down-left.png",
          revision: "a9981f68ee4266ba616365765e479a32",
        },
        {
          url: "/assets/bg-down-right.png",
          revision: "11018e796a04efe26ffcfd351064b646",
        },
        {
          url: "/assets/bg-up-left.png",
          revision: "f2861c8de287b3d267ea6afeea28deb2",
        },
        {
          url: "/assets/bg-up-right.png",
          revision: "0e0373d891bdfe49486a118634eb2a76",
        },
        {
          url: "/assets/bride.png",
          revision: "edab11f86ab25b22f3e82f0abe604110",
        },
        {
          url: "/assets/bsi-icon.png",
          revision: "ac1e54a47f9b6c15396070bdbe8db4e5",
        },
        {
          url: "/assets/bsi-reza.png",
          revision: "5b4679a0036cb3497268f6034a5ebb80",
        },
        {
          url: "/assets/bsi-soffi.png",
          revision: "233756c5de28346effa7bcab162d3925",
        },
        {
          url: "/assets/clossing-up-left.png",
          revision: "5ecd929c748742c600048f8569c4e60a",
        },
        {
          url: "/assets/clossing-up-right.png",
          revision: "2cb1633bbd5b1a700bd30702df4b9945",
        },
        {
          url: "/assets/covid-prokes.png",
          revision: "f9a0c2275436505e1ee2deba99c0bca2",
        },
        {
          url: "/assets/flower-left.png",
          revision: "c158b628c518e4d79b9c626d3770a8e0",
        },
        {
          url: "/assets/flower-right.png",
          revision: "ed9075309ee785d08d3ce4fbbfe279a7",
        },
        {
          url: "/assets/gopay-icon.png",
          revision: "00b68b4b315286c6a4e59c8bf2f8a131",
        },
        {
          url: "/assets/gopay-reza.png",
          revision: "0c26eadd39354fddb2d0b8d4ac5cdfc0",
        },
        {
          url: "/assets/gopay-soffi.jpg",
          revision: "47f8a5900c8a7b1707cb2395964629fd",
        },
        {
          url: "/assets/shoopepay-icon.png",
          revision: "a6b0bb4de8c68cc175c58781563eef77",
        },
        {
          url: "/assets/shoopepay-reza.png",
          revision: "5441344f983d055dff36a973a43452b7",
        },
        {
          url: "/assets/shopeepay-soffi.png",
          revision: "7c7ebbc0e68a7371067f8a9d34a82fc6",
        },
        {
          url: "/assets/white-flower-down-left.png",
          revision: "59e0d71319712e9c0608df8f9eb085b3",
        },
        {
          url: "/assets/white-flower-down-right.png",
          revision: "5109e38785d38bfffaf2059983a70073",
        },
        {
          url: "/assets/white-flower-up-left.png",
          revision: "5f8185aceac79ef1d2105ff481abf8a4",
        },
        {
          url: "/assets/white-flower-up-right.png",
          revision: "95ebba72ea8b2ea3de04ef1a72f0120d",
        },
        {
          url: "/audio/marriage_proposal.mp3",
          revision: "973b8056e0c6db5c362bc8e20c1fab62",
        },
        {
          url: "/favicon-16.png",
          revision: "4e25c5b24a5d6030a999de47000e4fa7",
        },
        {
          url: "/favicon-32.png",
          revision: "021a6cb43a68989a3de43c89c5a0c509",
        },
        {
          url: "/favicon-48.png",
          revision: "3838eaa8e2eed8719f8323382b338332",
        },
        { url: "/favicon.ico", revision: "84cff2e9390bb1319677661e982ecb05" },
        {
          url: "/icon-128x128.png",
          revision: "3ecd45823afbd465fe3cd996c5277aad",
        },
        {
          url: "/icon-192x192.png",
          revision: "550de4a4b4bdb0ffb2e31a7126e6d00e",
        },
        {
          url: "/icon-72x72.png",
          revision: "468db9078145836878e596eb03d6c248",
        },
        { url: "/icon.svg", revision: "10355d292d4fed3ff317368b6ffd93fe" },
        {
          url: "/images/icons/icon-128x128.png",
          revision: "3ecd45823afbd465fe3cd996c5277aad",
        },
        {
          url: "/images/icons/icon-144x144.png",
          revision: "50c450ba438f038dd51d0b5d1502b7e4",
        },
        {
          url: "/images/icons/icon-152x152.png",
          revision: "e65b771c5e78804883e21021de5782ee",
        },
        {
          url: "/images/icons/icon-192x192.png",
          revision: "550de4a4b4bdb0ffb2e31a7126e6d00e",
        },
        {
          url: "/images/icons/icon-384x384.png",
          revision: "d86e1155ebe1537bec8e5f0a20a2adac",
        },
        {
          url: "/images/icons/icon-512x512.png",
          revision: "f281fa09b33da0a2676b2fe2c5a8fc8c",
        },
        {
          url: "/images/icons/icon-72x72.png",
          revision: "468db9078145836878e596eb03d6c248",
        },
        {
          url: "/images/icons/icon-96x96.png",
          revision: "863d964c1faa0db82d803be344c117c1",
        },
        { url: "/logo192.png", revision: "550de4a4b4bdb0ffb2e31a7126e6d00e" },
        { url: "/logo512.png", revision: "1a1b52d4bd59c49273d55c89d43df744" },
        { url: "/manifest.json", revision: "d0f23c6c662034ff902f6eb361c0aab8" },
        { url: "/robots.txt", revision: "fa1ded1ed7c11438a9b0385b1e112850" },
        {
          url: "/touch-icon-ipad-retina.png",
          revision: "e65b771c5e78804883e21021de5782ee",
        },
        {
          url: "/touch-icon-ipad.png",
          revision: "18dcde8f663a7845f1064d7d8774938f",
        },
        {
          url: "/touch-icon-iphone-retina.png",
          revision: "1f3b046b680edd880f79ced855dbdd19",
        },
        {
          url: "/touch-icon-start-up-320x480.png",
          revision: "ce9b8e2c8e29448744e034476afe4bd5",
        },
        { url: "/vercel.svg", revision: "4b4f1876502eb6721764637fe5c41702" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: i,
              event: a,
              state: n,
            }) =>
              i && "opaqueredirect" === i.type
                ? new Response(i.body, {
                    status: 200,
                    statusText: "OK",
                    headers: i.headers,
                  })
                : i,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const i = e.pathname;
        return !i.startsWith("/api/auth/") && !!i.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
