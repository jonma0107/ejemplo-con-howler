const path = require("path");
const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const base = mode === "production" ? "/" + path.basename(process.cwd()) + "/" : "/";

module.exports = {
  root: "src",
  base: "https://github.com/jonma0107/howler/",
  mode,
  publicDir: "../public",
  build: {
    outDir: "../dist",
    assetsDir: "./"
  }
};
