import http from 'http';
import fs from 'fs';


const friends = {
    'Caleb_Squires': 'abracadabra',
    'Tyrique_Dalton': 'abracadabra',
    'Rahima_Young': 'abracadabra'
}

const server = http.createServer((req, res) => {
    if (req.method !== 'POST') {
        return
    }
    try {
        const authHeader = req.headers['authorization']
        if (!authHeader) {
            res.writeHead(401, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Authorization Required' }))
            return;
        }
        const base64Credentials = authHeader.split(' ')[1]
        const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8')
        const [username, password] = credentials.split(':')
        if (!friends[username] || friends[username] !== password) {
            res.writeHead(401, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Authorization Required' }))
            return;
        }
        const FileNAme = req.url.slice(1)
        let body = req.headers.body
        fs.writeFileSync(`guests/${FileNAme}.json`, body)
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(body)
    } catch (error) {
        res.writeHead(401, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Authorization Required' }))
        return;
    }
})
server.listen(5000, () => {
    console.log(`Server is listening on port 5000`);
})