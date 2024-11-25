import { writeFile } from 'node:fs/promises'

const inputs = process.argv[2]
let w1 = ''
let w2 = ''
let ww2 = ''
let ww = inputs.split(' ')
for (let i = 0; i < ww.length; i++) {
    for (let j = 0; j < ww[i].length; j++){
        if (j < ww[i].length/2){
            w1 += ww[i][j]
        }else{
            w2 += ww[i][j]
        }
    }
    if (i != ww.length-1){
         ww2 += w2 +w1 + ' '
    } else {
         ww2 += w2 +w1 
    }
   
    w2 = ''
    w1 = ''
}

writeFile('verydisco-forever.txt', ww2)