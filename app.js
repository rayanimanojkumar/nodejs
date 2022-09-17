
const express = require('express')
const bodyparser = require('body-parser');
const path = require('path');

const app = express();
const adminroutes =  require('./routes/admin.js');
const shoproutes  = require('./routes/shop.js');



app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminroutes);

app.use(shoproutes);

app.use((req, res, next )=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));

});

// app.use((req, res, next)=>{
//     console.log("in the middleware")
//     next(); // this allow the request continue the next middleware
// });
// app.use('/add-product',(req, res, next)=>{
    
//     // res.send('<form action="/product" method="POST"><input type="text" name="title/><button type="submit">add product</button></form>');
//     res.sendFile(path.join(__dirname,'/index.html'));
// });

// app.use('/product',(req, res, next)=>{
//     console.log(req.body);
//     res.redirect('/');

// });

// app.use('/',(req, res, next)=>{
    
//     res.send("<h1>Hello express!<h1>")


// });
app.listen(3000)
