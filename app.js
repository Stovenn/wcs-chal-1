var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
mongoose = require("mongoose"),
methodOverride = require("method-override");

var argonauteRoutes = require('./routes/argonautes');

mongoose.connect("mongodb://localhost/chal1",
  { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
  }).then(()=>{
      console.log("Connected to db");
  }).catch(err =>{
      console.log("Error !", err);
  })
  
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.static(__dirname + "/public"));
  app.set("view engine", "ejs");
  app.use(methodOverride("_method"));

  app.use('/argonautes', argonauteRoutes)

  app.listen(3000 ,(req, res)=>{
    console.log("The server has started");
  })