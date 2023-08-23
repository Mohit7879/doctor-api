
const express=require('express');
const mongoose=require('mongoose');
const port =800;
const app=express();



// imported passport 
const passport=require('passport')

const passjwt=require('./config/passport-jwt')




app.use(express.json())
app.use(express.urlencoded({   
    extended: false
}))  





//
const db="mongodb+srv://mohityadavkkn25:mohit@cluster0.hwrm7lq.mongodb.net/?retryWrites=true&w=majority"
//app connection to mongodb
mongoose.connect(db)
.then(()=> {
    console.log("App is now connected to DB")
}).catch((err)=> {
    console.log(`${err}`);
})






app.use('/',require('./routes'));


// app listening to port
app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }

    console.log('server runnning successfully');
})