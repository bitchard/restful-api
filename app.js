//importing of the package
const express = require('express');

//execution of the package
const app = express();


const mongoose = require('mongoose');

//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});

app.get('/posts', (req, res) => {
    res.send('We are on posts');
});



//Connect to Db
mongoose.connect('mongodb+srv://richgarcia7525:<DanMarkson308>@restapi.hfobuse.mongodb.net/?retryWrites=true&w=majority', () => console.log('connected to DB!')
);
//This is how we can start listening to our server
app.listen(3000);