module.exports = {
  "globDirectory": ".",
  "inlineWorkboxRuntime": "true",
  "globPatterns": [
    "**/*.{ico,html,css}",
    "web_modules/import-map.json",
    "dist/*.js"
  ],
  "swDest": "sw.js",

  // Define runtime caching rules.
  runtimeCaching: [{
    // Match any request that ends with .webp .png, .jpg, .jpeg or .svg.
    urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/,

    // Apply a cache-first strategy.
    handler: 'CacheFirst',

    options: {
      // Use a custom cache name.
      cacheName: 'images',

      // Only cache 15 images.
      expiration: {
        maxEntries: 15,
      },
    },
  }],
};