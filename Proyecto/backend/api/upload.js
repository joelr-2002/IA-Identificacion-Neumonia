const http = require('http');
const fs = require('fs');
const formidable = require('formidable');

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/upload') {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error uploading image.');
                return;
            }
            
            const oldPath = files.image.path;
            const newPath = `uploads/${files.image.name}`;
            
            fs.rename(oldPath, newPath, (err) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error moving image.');
                    return;
                }
                
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(newPath);
            });
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found.');
    }
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
