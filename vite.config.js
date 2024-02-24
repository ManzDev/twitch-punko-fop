const path = require("path");
const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const base = mode === "production" ? `/${path.basename(process.cwd())}/` : "/";

module.exports = {
  root: "src",
  base,
  mode,
  publicDir: "../public",
  /*
  lib: {
    entry: "./components/PunkoFop.js",
    name: "PunkoFop",
    fileName: "punko-fop"
  },
  rollupOptions: {
    output: {
      format: "es"
    }
  }, */
  build: {
    outDir: "../dist",
    assetsDir: "./"
  }
};
