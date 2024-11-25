import { readdir } from 'node:fs/promises';
import { writeFile } from 'node:fs/promises'
import { promises as fs } from 'fs';
const path = process.argv[2]

const files = await readdir(path);
let n = 1
let sl = []
for (const file of files) {
    const data = await fs.readFile(path + '/' + file, 'utf8')
    const obj = JSON.parse(data)
    if (obj.answer == 'yes') {
        let fil = file.split('.')[0]
        let fi = fil.split('_')[1] + " " + fil.split('_')[0]
        sl.push(fi)
    }

}
sl = sl.sort()
let dd = ''

for (let i = 0; i < sl.length; i++) {
    let f = n + '. ' + sl[i]
    if (i != sl.length-1){
         dd += f+'\n'
    } else {
        dd += f
    }
    n++
}
writeFile('vip.txt', dd)