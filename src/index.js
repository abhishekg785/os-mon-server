'use strict'

const http       = require('http');
const getOsStats = require('./getStats');

const server = http.createServer((req, res)=>{
    let stats = getOsStats();
    res.end(stats);
});

server.listen(3000, ()=>{
    console.log('listening on port 3000');
});