// generate-index.js
import { writeFileSync } from "fs";
import { join, relative } from "path";
import glob from "fast-glob";

// La root è la cartella corrente da cui lanci lo script
const ROOT_DIR = process.cwd();

// Nome del file di output (verrà creato nella root)
const OUTPUT_FILE = join(ROOT_DIR, "_index.scss");

// Trova tutti i file .scss in ROOT_DIR, escludendo eventuali _index.scss
const files = glob.sync("**/*.scss", {
  cwd: ROOT_DIR,
  ignore: ["**/_index.scss"],
});

// Genera i forward
const content = files
  .map((file) => {
    // Percorso relativo alla root
    const relPath = file.replace(/\\/g, "/"); // già relativo, perché usiamo cwd
    return `@forward "${relPath.replace(/^_/, "").replace(/\.scss$/, "")}";`;
  })
  .join("\n");

// Scrivi il file
writeFileSync(OUTPUT_FILE, content);

console.log(`✅ Generato ${OUTPUT_FILE} con ${files.length} forward.`);
