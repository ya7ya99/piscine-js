import { readdir } from 'node:fs/promises';
const path = process.argv[2]

const files = await readdir(path);
let n = 1
let sl = []
for (const file of files) {
   let  fil = file.split('.')[0]
   let fi = fil.split('_')[1]+" "+fil.split('_')[0]
    sl.push(fi)
}
sl = sl.sort()
for (const name of sl){
    let f = n+'. '+name
    console.log(f);
    n++
}
