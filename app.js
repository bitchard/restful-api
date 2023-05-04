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
const mongoUrl="mongodb+srv://richgarcia7525:DanMarkson308@restapi.hfobuse.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoUrl, {
    useNewUrlParser:true
}).then(() => { console.log ("Connected to Database");})
.catch (e=> console.log(e))
//This is how we can start listening to our server
app.listen(3000, () => {
    console.log("Server Started");
});