const express = require('express');
const router = express.Router();
const path = require('path');

const rootdir = require('../util/path');
router.get('/admin/add-product',(req, res, next)=>{
    
    // res.send(' <form action="/product" method="POST"><input type="text" name="title"><button type="submit">add product</button></form>');
    res.sendFile(path.join(rootdir, 'views', 'add-product.html'));
});

router.post('/product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');

});

module.exports = router;