const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create BTdata Schema & model
const BTdataSchema = new Schema({

   


    btdata:{
        type: String,  
    } ,
    pvm:{
        type: Date
    }, 
    
});

const BTdata = mongoose.model('bt_data',BTdataSchema);

module.exports = BTdata;







// name = btdata
// age = pvm
//  
// person = bt_data
// /persons = btdatas