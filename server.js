const express = require('express');
const app = express();
const morgan = require('morgan');
// const fs = require('fs');
const port = 3000;
const callbacks = require('./callbacks');

// CONFIGURE 

const logger = (req, res, next) => {
    const { method, url } = req;

    if(url !== 'favicon.ico') console.log(method, url, new Date());
    next(); 
}
// MOUNT MIDDLEWARE
app.use(morgan('dev'));

// ROUTES
app.get('/', callbacks.handleRoot)
app.get('/about', callbacks.handleAbout)
app.get('/contact', callbacks.handleContact)


// TELL APP TO LISTEN ON PORT (CURRENTLY 3000)
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})