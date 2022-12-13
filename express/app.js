 const express = require('express');

const app = express();

// app.get('/', function(req,res){
//     res.send('hello world');
// })

//redirects
app.get('/about', (req,res)=>{
    res.redirect('about-me')
})


//Parameters

const user = [
   {
    'id':1,
    'username':"suraj",
   },
   {
    id:2,
    'username':"xyz",
   },
   {
    id:3,
    'username':"pqr",
   }
]

app.get('/user/:id', (req,res)=>{
    console.log(req.params.id);
   res.send("user id recived : {name}")
})

//Quriess
app.get('/user', (req,res)=>{
    console.log(req.query);
    res.send(users);
})



//404 page
app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html', {root : __dirname});
})


app.listen(3000);