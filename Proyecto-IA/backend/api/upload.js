const http = require('http');
const fs = require('fs');
const formidable = require('formidable');
const path = require('path');

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
            const newFileName = generateUniqueFileName(files.image.name);
            const newPath = path.join(__dirname, 'data', newFileName);

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

function generateUniqueFileName(originalName) {
    const timestamp = Date.now();
    const extension = path.extname(originalName);
    return `${timestamp}${extension}`;
}

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
