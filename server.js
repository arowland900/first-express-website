const express = require('express');
const app = express();
const morgan = require('morgan');
// const fs = require('fs');
const port = 3000;
// const callbacks = require('./callbacks');
const root = require('./callbacks/root')
const about = require('./callbacks/about')
const contact = require('./callbacks/contact')

// CONFIGURE 

const logger = (req, res, next) => {
    const { method, url } = req;

    if(url !== 'favicon.ico') console.log(method, url, new Date());
    next(); 
}
// MOUNT MIDDLEWARE
app.use(morgan('dev'));

// ROUTES
app.get('/', root.handleRoot)
app.get('/about', about.handleAbout)
app.get('/contact', contact.handleContact)


// TELL APP TO LISTEN ON PORT (CURRENTLY 3000)
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})