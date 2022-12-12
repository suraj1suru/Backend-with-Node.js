const express = require('express')

const app = express();

const users = [
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

//miniApp

const userRouter = express.Router();
//base route
app.use("/user",userRouter)

userRouter
.route("/")
.get(getUser)
.post(postUser)
.patch(patchUser)
.delete(deleteUser)

userRouter.route('/:id',get(getUserById));

function getUser(req,res){

}

function postUser(req,res){

}

function patchUser(req,res){

}

function deleteUser(req,res){

}

function getUserById(req,res){

}








app.listen(5000);