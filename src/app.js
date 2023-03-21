const express=require("express");

const app=express();

const port=3000;

app.use(express.urlencoded({extended:false}));
app.use(express.json());
const routes = require("../routes/main");
const mongoose=require("mongoose")

 const  dotenv=require("dotenv").config()
app.use("", routes)
app.use("/static",express.static("public"))
app.set("view engine", "ejs");
app.set("views","views/partials")

const connectionParams={
  useNewUrlParser: true,

  useUnifiedTopology: true ,
    
      
}

mongoose.connect("mongodb+srv://danishriazprogramer:jTO957Bmn9sUJtGL@cluster0.fzjs5cn.mongodb.net/test",connectionParams)

  .then(() => console.log('Connected!'));


// session connection

const  sessionConnection=mongoose.connection.once('open',()=>{
    console.log("connetion mongo for session");

})




const session = require('express-session');
const bodyParser = require("body-parser");
const MongoStore = require('connect-mongo')(session);

app.use(bodyParser.json)

app.use(bodyParser.urlencoded({
    extended:true
}))





   
app.listen(port,()=>{
console.log('server stated on port :>> ', port);

});