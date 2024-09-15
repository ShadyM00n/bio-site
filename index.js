const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');  // Use regular fs for synchronous operations
const fsPromises = require('fs').promises; // Use fs.promises for async operations elsewhere
const server = express();
const config = require('./config.json');
const { logs } = require('./lib/exports');

server.use('/assets', express.static(path.join(__dirname, 'src/assets')));

// SSL Loading
/* const sslOptions = {
    key: fs.readFileSync(path.join(__dirname, 'ssl', 'privkey.pem')), // Sync read
    cert: fs.readFileSync(path.join(__dirname, 'ssl', 'cert.pem')) // Sync read
}; OPTIONAL IF YOU HAVE SSL
*/

server.get('*', async (req, res) => {
    const def = path.join(__dirname, "/src/");
    let pat = req.path;
    if (pat === '/') {
        pat = 'index.html';
    } else {
        const fullPath = path.join(def, pat);
        const stat = await fsPromises.stat(fullPath).catch(() => null);
        if (stat && stat.isDirectory()) {
            pat = path.join(pat, 'index.html');
        };
    };
    const filePath = path.join(def, pat);
    try {
        const fileContent = await fsPromises.readFile(filePath);
        res.send(fileContent.toString());
    } catch (err) {
        res.status(404).sendFile(path.join(def, 'err/index.html'));
    }
});

https.createServer(sslOptions, server).listen(config.port, () => {
    logs.success(`Bio Site on ${config.domain}`);
});

server.listen(config.port2, () => {
    logs.success(`Dev site on http://localhost:${config.port2}`);
});
