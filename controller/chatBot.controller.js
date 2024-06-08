const handleMessage = async (message) => {
    const text = message.toLowerCase();
    let response;

    if (text.includes('hello')) {
        response = 'Hi there! How can I help you?';
    } else if (text.includes('bye')) {
        response = 'Thank you! Have a great day!';
    } else {
        response = 'Sorry, I am not able to answer that.';
    }

    return console.log(`Bot: ${response}`);
};

module.exports = {
    handleMessage
};
