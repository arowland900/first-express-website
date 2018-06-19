const fs = require('fs');
// CB FUNCTIONS / CONTROLLERS

var handleContact = (req, res) => {
    fs.readFile('views/contact.html', (err, data) =>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })
}

module.exports = {
    handleContact

}