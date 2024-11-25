import fs from 'node:fs';
const file = process.argv[2]
fs.readFile(file, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(veru(data))
});

function veru(params) {
    return params.split(' ').map((v) => {
        const mid = v.length / 2;
        return v.slice(mid) + v.slice(0, mid);
    }).join(' ');
}