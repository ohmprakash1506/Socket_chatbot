const socketIo = require('socket.io');
const bot = require('./controller/chatBot.controller');

module.exports = (server) => {
    const io = socketIo(server);

    io.on('connection', (socket) => {
        console.log(`A user has been connected`);

        socket.on('message', async (msg) => {
            console.log(`Message: ${msg}`);
            const botResponse = await bot.handleMessage(msg);
            socket.emit('message', botResponse);
        });

        socket.on('disconnect', () => {
            console.log(`User has been disconnected`);
        });
    });
};
