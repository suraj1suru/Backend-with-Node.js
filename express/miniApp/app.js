const { Router } = require("express");
const express = require("express");
const mongoose = require("mongoose");

const { db_link}  = require('./secrets')

const app = express();
app.use(express.json());
const authRouter = express.Router();

app.use("/auth", authRouter);

authRouter.route("/signup").get(getSignup).post(postSignUp);

function getSignup(req, res) {
  res.sendFile("/public/index.html", { root: __dirname });
}

function postSignUp(req, res) {
  let obj = req.body;
  console.log("backend", obj);
  res.json({
    message: "user signed up",
    data: obj,
  });
}

app.listen(3000);


//Db connection

mongoose.connect(db_link)
.then(function(db){
console.log("db connected");
})
.catch(function (err){
  console.log(err);
  console.log("db not connected");
});


//Mongoose Schemaa

const userSchema = mongoose.Schema({
  email:{
    type:String,
    required:true,
    unique:true
  },
  password :{
    type:String,
    required:true,
    min:8

  }
})

// model

const userModel = mongoose.model('userModel', userSchema);

(async function createUser(){
  let user = {
    email : 'abc@gmail.com',
    password : 'ecwd46dcs'
  };
  let data = await userModel.create(user);
  console.log(data);
})();