"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const express = require("express");
const next = require("next");
const cacheableResponse = require("cacheable-response");
const port = parseInt(process.env.PORT, 10) || 3000;
let dev = true;
const app = next({ dev });
const handle = app.getRequestHandler();
let ssrCache;
if (dev) {
    ssrCache = cacheableResponse({
        ttl: 0,
        get: async ({ req, res, pagePath, queryParams }) => ({
            data: await app.renderToHTML(req, res, pagePath, queryParams)
        }),
        send: ({ data, res }) => res.send(data)
    });
}
else {
    ssrCache = cacheableResponse({
        ttl: 1000 * 60 * 60,
        get: async ({ req, res, pagePath, queryParams }) => ({
            data: await app.renderToHTML(req, res, pagePath, queryParams)
        }),
        send: ({ data, res }) => res.send(data)
    });
}
const compression = require("compression");
app.prepare().then(() => {
    const server = express();
    server.use(compression());
    server.get("/", (req, res) => {
        ssrCache({ req, res, pagePath: "/" });
    });
    server.get("*", (req, res) => {
        handle(req, res);
    });
    server.listen(port, err => {
        console.log(`> Ready on http://localhost:${port}`);
    });
}).catch(err => {
    console.error(err);
});
