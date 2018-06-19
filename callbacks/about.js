const fs = require('fs');
// CB FUNCTIONS / CONTROLLERS

var handleAbout = (req, res) => {
    fs.readFile('views/about.html', (err, data) =>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })
}


module.exports = {
    handleAbout
    
}