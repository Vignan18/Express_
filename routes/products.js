const express = require('express');
const router = express.Router();


router.get('/', function(req, res){
    res.send("list of products");
})


router.get('/product-details', function(req, res){
    res.send("list of specific products");
})

module.exports = router;