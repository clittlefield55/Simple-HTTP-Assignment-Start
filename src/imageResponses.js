const fs = require('fs');

const picture = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getPicture = (request, response) => {
    response.writeHead(200, { 'Content-Type': 'image/png' });
    response.write(picture);
    response.end();
};

module.exports.getPicture = getPicture;