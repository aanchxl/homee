const express=require('express');
const app=express();
//requuest req and response resp
app.get("/",(req,resp)=>{
    resp.send("app is working");
})
app.listen(5000)