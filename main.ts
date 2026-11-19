/**
 * One Day in World News — Wednesday, 18 November 2026.
 * This poster is the repository's entry: a single broadsheet front page, entry.png,
 * that gathers the day's worldwide reporting onto one printable sheet.
 * The masthead spans the top with the paper's name and the full date, setting the edition.
 * Directly beneath, a day-in-numbers strip reduces the news to a row of key figures and counts.
 * The lead stories then run across the width: the biggest headlines of the day, given the most space.
 * Below the leads, a region color grid sorts the remaining coverage into colored zones, one per region,
 * so a reader can trace how much of the day belonged to each part of the world at a single glance.
 * Toward the foot of the page, short evening briefs compress late-breaking items into tight paragraphs.
 * A sources footer closes the sheet, crediting the outlets from which every story on the page was drawn.
 * The whole composition reads top to bottom like a real newspaper: masthead, numbers, leads, regions,
 * briefs, and sources — one ordinary Wednesday, rendered as one image.
 */

import { copyFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = dirname(fileURLToPath(import.meta.url));
const source = join(repo, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const target = join(outputDir, 'entry.png');
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log('entry.png copied to', target);
