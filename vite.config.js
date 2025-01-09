import { resolve } from "path";

export default {
  // Necessary for GH Pages since it's hosted on a subpath.
  base: "/debug-workshop",
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        fruitbasket: resolve(__dirname, "fruitbasket.html"),
        mergesort: resolve(__dirname, "mergesort.html"),
      },
    },
  },
};
