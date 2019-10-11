import fs from 'fs';
import path from 'path';
import express from 'express';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';

const PORT = 8080;
const app = express();

const router = express.Router();

const serverRenderedContent = (_req, res, _next) => {
    fs.readFile(path.resolve('./public/index.html'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('An error occurred!')
        }
        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
            )
        )
    })
};
router.use('^/$', serverRenderedContent);
console.log(__dirname);
router.use(
    express.static(path.resolve(__dirname, '..', 'public'), { maxAge: '30d' })
);

app.use(router);

app.listen(PORT, () => {
    console.log(`SSR running on port ${PORT}!`)
});