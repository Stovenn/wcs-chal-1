const express = require("express");
const router = express.Router();
const Argonaute = require("../models/argonautes");



router.get("/", (req, res)=>{  
  Argonaute.find({}, (err, argonautes)=> {
   if(err){
     console.log(err);
   }else{
     argonautes.forEach((argonaute)=>{
     })
     res.render("argonautes/index", {argonautes: argonautes});
   }
 });
});


//Create route
router.post("/", (req, res)=>{
 const name = req.body.name;
 const newMember = {name: name}
 
 Argonaute.create(newMember, (err, member)=>{
   
   if(err){
     console.log(err);
     res.render("argonautes");
   }else{
     res.redirect("/argonautes");
   }
 });
});


module.exports = router;