const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/btdb', { useNewUrlParser: true, useUnifiedTopology: true } );
mongoose.Promise = global.Promise;

app.use(express.static('public'));

//initialize routes
const routes = require('./mongo_routes/mongoapi'); // import mongoapi.js

// error handling middleware
app.use(function(err, req, res, next){
        console.log(err);
        //res.send({error: err.message});
        res.status(422).send({error: err.message});
});

app.use(express.json({ extended: true }));  // 
app.use(bodyParser.json({ extended: true })); // 
// // make sure these json thingys are before '/api' otherwise it won't work
app.use('/api', routes);




app.use(express.urlencoded({ extended: true }));
app.post('/api', function(req, res){ //TÄN PITÄIS LÄHETTÄÄ TAVARAA MONGODATABASEEN, EI TOIMI
    console.log('POST Request');
    res.send({
        btdata:'testiiiii',
        pvm: ''
        
    });
}) 




app.listen(process.env.port || 8080, function(){
console.log("listening for requests");

});

