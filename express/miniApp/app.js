const { Router } = require("express");
const express = require("express");

const app = express();

app.listen(3000);
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
