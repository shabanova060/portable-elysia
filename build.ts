// build.ts
import type { BuildConfig } from "bun";

async function runBuild() {
  const result = await Bun.build({
    entrypoints: ["./public/home.js"], // Your entry file
    outdir: "./dist", // Output directory
    target: "browser", // "browser" | "node" | "bun"
    format: "esm", // "esm" or "cjs"
    minify: true, // Minify syntax, whitespace, and identifiers
    sourcemap: "external", // "none" | "inline" | "external"
    splitting: false, // Enable code splitting (requires format: "esm")
  });

  if (!result.success) {
    console.error("Build failed:");
    for (const message of result.logs) {
      console.error(message);
    }
    process.exit(1);
  }

  console.log(
    `Build succeeded! Produced ${result.outputs.length} artifact(s):`,
  );
  for (const output of result.outputs) {
    console.log(` - ${output.path} (${(output.size / 1024).toFixed(2)} KB)`);
  }
}

runBuild();
