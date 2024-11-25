import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
    if (req.method !== 'POST') {
        return
    }
    const FileNAme = req.url.slice(1)
    let body = ""
    req.on('data', chunk => {
        body += chunk.toString()
    })
    req.on('end', async () => {
        try {
            fs.writeFileSync(`guests/${FileNAme}.json`, body)
            res.writeHead(201, { 'Content-Type': 'application/json' })
            res.end(body);
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'server failed' }));
        }
    });
});
server.listen(5000, () => {
    console.log(`Server is listening on port 5000`);
})
