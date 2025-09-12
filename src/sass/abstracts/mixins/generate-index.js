// generate-index.js
import { writeFileSync } from "fs";
import { join } from "path";
import glob from "fast-glob";

// La root è la cartella corrente da cui lanci lo script
const ROOT_DIR = process.cwd();

// Nome del file di output (verrà creato nella root)
const OUTPUT_FILE = join(ROOT_DIR, "_index.scss");

// Parole chiave da ignorare (case-insensitive, match anche parziale)
const IGNORED_KEYWORDS = [
  "utilities",
  "utils",
  "hook",
  "hooks",
  "helper",
  "helpers",
];

// Costruisci la regex dinamicamente
const IGNORE_REGEX = new RegExp(
  `(${IGNORED_KEYWORDS.join("|")})`,
  "i"
);

// Trova tutti i file .scss in ROOT_DIR, escludendo _index.scss
const files = glob.sync("**/*.scss", {
  cwd: ROOT_DIR,
  ignore: ["**/_index.scss"],
});

// Filtra i file: esclude se in uno qualunque dei segmenti del path compare il match
const filtered = files.filter((file) => !IGNORE_REGEX.test(file));

// Genera i forward
const content = filtered
  .map((file) => {
    const relPath = file.replace(/\\/g, "/"); // già relativo
    return `@forward "${relPath.replace(/^_/, "").replace(/\.scss$/, "")}";`;
  })
  .join("\n");

// Scrivi il file
writeFileSync(OUTPUT_FILE, content);

// Log finale
console.log(
  `✅ Generato ${OUTPUT_FILE} con ${filtered.length} forward (su ${files.length} file totali).\n` +
  `🚫 Ignorati file/cartelle contenenti: ${IGNORED_KEYWORDS.join(", ")} (case-insensitive, match parziale).`
);
