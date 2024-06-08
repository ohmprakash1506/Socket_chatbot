const express = require('express');
const http = require('http');
const socket = require('./socketIo')

const app = express();
const server = http.createServer(app);
socket(server)

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
