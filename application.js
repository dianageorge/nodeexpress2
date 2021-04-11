var express =require('express')
var app=express()
app.get('/',(req,res)=>{
    res.send("welcome")
})
app.get('/home',(req,res)=>{
    res.send("its a home page")
})
app.get('/default',(req,res)=>{
    res.send("you are in a default page")
})
app.listen(3000,()=>{
console.log("no error");
})