const { response } = require('express');
const express = require('express');
const router = express.Router();
const BTdata = require('../mongo_models/btschema.js');

//GET ALL BT DATA from db
router.get('/btdatas', function(req, res, next){
    //res.send({type: 'GET'});
    BTdata.find({}).then(function(bt_data){      // Returns all from the mongo database
        res.send(bt_data)
    }); 
});

//POST to db
router.post('/btdatas', function(req, res, next){
  BTdata.create(req.body).then(function(bt_data){
        res.send(bt_data);
    }).catch(next); 
});

//UPDATE in db
router.put('/btdatas/:id', function(req, res, next){
    BTdata.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        BTdata.findOne({_id: req.params.id}).then(function(bt_data){
             res.send(bt_data);
        });
    });
    //res.send({type: 'PUT'});
});

//DELETE from db
router.delete('/btdatas/:id', function(req, res, next){
    console.log(req.params.id);
    BTdata.findByIdAndRemove({_id: req.params.id}).then(function(bt_data){
        res.send(bt_data);
    });
   // res.send({type: 'DELETE'});
});

module.exports = router;
