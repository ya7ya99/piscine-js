import { readdir } from 'node:fs/promises';
const path = process.argv[2]

const files = await readdir(path);
console.log(files.length);


