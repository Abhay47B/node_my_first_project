const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/home",(req,res)=>{
    res.send("Server started pulled by Get Method")
})
app.post("/post-Method",(req,res)=>{
    console.log(req.body.name)
    res.send("Server started pulled by post method.")
})
app.listen(3000,console.log("Server Running => 3000"));