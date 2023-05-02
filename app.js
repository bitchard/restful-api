const express = require('express');

const app = express();

//ROUTES
app.get('/',  (req, res) => {
    res.send('We are on home');
})

//This is how we can start listening to our server
app.listen(3000);