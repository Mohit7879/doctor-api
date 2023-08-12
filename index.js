const express=require('express');
const port =800;
const app=express();

app.get('/',(req,res)=>{
       res.send('hello');
})

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }

    console.log('server runnning successfully');
})