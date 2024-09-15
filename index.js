const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');
const server = express();
const config = require('./config.json');
const { logs } = require('./lib/exports');

const sslOptions = {
    key: fs.readFileSync(path.join(__dirname, 'ssl', 'privkey.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'ssl', 'cert.pem'))
};

if (config.port === 443 || config.port2 === 443) {
    if (config.ssl == false) return;
    if (config.port === 443) {
        https.createServer(sslOptions, server).listen(config.port, () => {
            logs.success(`Bio Site on ${config.domain}`);
        });
    server.listen(config.port2, () => {
        logs.success(`Dev site on http://localhost:${config.port2}`);
    });

    } else if (config.port2) {
    server.listen(config.port, () => {
        logs.success(`Bio Site on ${config.domain}`);
    });
        https.createServer(sslOptions, server).listen(config.port, () => {
            logs.success(`Dev Site on https://localhost:${config.port2}/`);
        });
    }
}
server.use('/assets', express.static(path.join(__dirname, 'src/assets')));
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, '/src'));


server.get('*', (req, res) => {
    const pat = req.path;
    switch (pat) {
        case '/': {
            return res.render('index', {
                theme: config.theme,
                connections: {
                    discord: config.account.connections.discord,
                    github: config.account.connections.github,
                    instagram: config.account.connections.instagram,
                    tiktok: config.account.connections.tiktok,
                    x: config.account.connections.x
                },
                user: {
                    name: {
                        part1: config.account.name.part1,
                        part2: config.account.name.part2,
                        whole: config.account.name.whole,
                    },
                    pfp: config.account.pfp,
                    bio: {
                            part1: config.account.bio.big.part1,
                            part2: config.account.bio.big.part2,
                            part3: config.account.bio.big.part3,
                        small: "I am a 16 year old from the U.S, and I hope to be employed by a FAANG company one day."
                    }
                }
            });
        };
        case '/bio': {
            return res.render('bio', {
                theme: config.theme,
                connections: {
                    discord: config.account.connections.discord,
                    github: config.account.connections.github,
                    instagram: config.account.connections.instagram,
                    tiktok: config.account.connections.tiktok,
                    x: config.account.connections.x
                },
                user: {
                    name: {
                        part1: config.account.name.part1,
                        part2: config.account.name.part2,
                        whole: config.account.name.whole,
                    },
                    pfp: config.account.pfp,
                },
                bio: config.bio
            });
        };
        case '/projects': {
            return res.render('projects', {
                theme: config.theme,
                connections: {
                    discord: config.account.connections.discord,
                    github: config.account.connections.github,
                    instagram: config.account.connections.instagram,
                    tiktok: config.account.connections.tiktok,
                    x: config.account.connections.x
                },
                user: {
                    name: {
                        part1: config.account.name.part1,
                        part2: config.account.name.part2,
                        whole: config.account.name.whole,
                    },
                    pfp: config.account.pfp,
                },
                projects: config.projects
            });
        };
        default: {
           return res.render('error', {
                theme: config.theme,
                connections: {
                    discord: config.account.connections.discord,
                    github: config.account.connections.github,
                    instagram: config.account.connections.instagram,
                    tiktok: config.account.connections.tiktok,
                    x: config.account.connections.x
                },
                user: {
                    name: {
                        part1: config.account.name.part1,
                        part2: config.account.name.part2,
                        whole: config.account.name.whole,
                    },
                    pfp: config.account.pfp
                }
            })
        };
    };
});
