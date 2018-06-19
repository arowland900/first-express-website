const fs = require('fs');
// CB FUNCTIONS / CONTROLLERS
var handleRoot = (req, res) => {
    fs.readFile('views/home.html', (err, data) =>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })
}
var handleAbout = (req, res) => {
    fs.readFile('views/about.html', (err, data) =>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })
}
var handleContact = (req, res) => {
    fs.readFile('views/contact.html', (err, data) =>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })
}

module.exports = {
    handleAbout,
    handleContact,
    handleRoot
}