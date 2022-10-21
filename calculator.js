const express = require("express");
const bodyparser=require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
  });

  app.post("/",function(req,res){
   var first=Number(req.body.num1);
   var second=Number(req.body.num2);
   var sum=first+second;
    res.send("your sum of two number= "+sum);
  });

  app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/BMICalculator.html");
    });

  app.post("/bmicalculator",function(req,res){
     var weight=parseFloat(req.body.weight);
     var height=parseFloat(req.body.height);
     var bmi=weight/(height*height);
      res.send("your body mass index = "+bmi);
    });

app.listen(3000,function(){
  console.log("your calculator is started on 3000 port");
});
