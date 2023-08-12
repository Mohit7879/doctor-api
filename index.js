
const express=require('express');
const mongoose=require('mongoose');
const port =800;
const app=express();

//app connection to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/doctor_api',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> {
    console.log("App is now connected to DB")
}).catch((err)=> {
    console.log(`${err}`);
})


app.get('/',(req,res)=>{
       res.send('hello');
})


// app listening to port
app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }

    console.log('server runnning successfully');
})