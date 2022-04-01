const express = require('express');
const router = express.Router();


router.get('/', function(req, res){
    res.send("list of order");
})


router.get('/:id', function(req, res){
    res.send(req.params.id);
})

module.exports = router;