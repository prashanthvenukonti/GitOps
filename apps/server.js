const http = require('node:http');

const port = Number(process.env.PORT || 3000);

const server = http.createServer((req, res) => {
    if (req.url === '/health') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        return res.end(JSON.stringify({
            status: 'ok'
        }));
    }

    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    res.end('GitOps Node.js application is running\n');
});

server.listen(port, '0.0.0.0', () => {
    console.log(`Application listening on port ${port}`);
});