import esbuild from "esbuild";
import htmlPlugin from "@chialab/esbuild-plugin-html";
import envFilePlugin from "esbuild-envfile-plugin";

await esbuild.build({
  entryPoints: ["src/index.html"],
  outdir: "public",
  watch: true,
  minify: false,
  bundle: true,
  assetNames: "assets/[name]-[hash]",
  plugins: [htmlPlugin(), envFilePlugin],
});
