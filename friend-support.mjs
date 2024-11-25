import http from 'http'
import { promises as fs } from 'fs';

const server = http.createServer(async (req, res) => {
    const guest = req.url.slice(1)
    const path = `guests/${guest}.json`
    try {
        const data = await fs.readFile(path, 'utf8');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(JSON.parse(data)));
    } catch (err) {
        if (err.code === 'ENOENT') {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: "guest not found" }))
        } else {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: "server failed" }))
        }

    }

})

server.listen(5000, () => {
    console.log('Server started on port 5000');
})