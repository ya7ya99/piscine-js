import { Buffer } from 'node:buffer';
import { promises as fs } from 'fs';
import { writeFile } from 'node:fs/promises'


const file = process.argv[2]
const keywords = process.argv[3]
const filename = process.argv[4]

const data = await fs.readFile(file, 'utf8')


if (keywords === 'encode') {
    const buf1 = Buffer.from(data).toString('base64') //Buffer.from(data, 'base64');
    if (filename) {
        writeFile(filename, buf1)
    } else {
        writeFile('cypher.txt', buf1)
    }
} else if (keywords === 'decode') {
    const buf1 =  Buffer.from(data, 'base64').toString('utf-8') //data.toString('base64')
    if (filename) {
        writeFile(filename, buf1)
    } else {
        writeFile('clear.txt', buf1)
    }
}
