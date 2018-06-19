const fs = require('fs');
// CB FUNCTIONS / CONTROLLERS
var handleRoot = (req, res) => {
    fs.readFile('views/home.html', (err, data) =>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })
}
module.exports = {
    handleRoot
}