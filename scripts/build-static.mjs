import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const outDir = join(root, "dist");

const entries = [
  "_app",
  "contact.html",
  "equipe",
  "equipe.html",
  "favicon.ico",
  "galerie",
  "galerie.html",
  "icone",
  "index.html",
  "logo",
  "plans-de-commandites",
  "robots.txt",
  "sponsors",
  "sponsors.html",
  "videos",
  "voiture",
  "voiture.html",
  ".nojekyll"
];

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

for (const entry of entries) {
  await cp(join(root, entry), join(outDir, entry), { recursive: true });
}
