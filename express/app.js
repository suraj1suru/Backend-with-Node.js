const express = require('express');

const app = express();

app.get('/', function(req,res){
    res.send('hello world');
})

//redirects
app.get('/about', (req,res)=>{
    res.redirect('about-me')
})

//404 page
app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html', {root : __dirname});
})

app.listen(3000);