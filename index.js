
const express=require('express');
const mongoose=require('mongoose');
const port =800;
const app=express();

app.set('view engine','ejs');
app.set('views',"./views")

// imported passport 
const passport=require('passport')
const passlocal=require('./config/passport');
const passjwt=require('./config/passport-jwt')

// imported express session and store
const session=require('express-session');
const mongoStore=require('connect-mongo')

app.use(session({
    name:"doctor",
    secret: 'someting blah',
    saveUninitialized: false,
    resave: false,
   
    cookie: { 
              maxAge:1000*60*100 },
  
              store: mongoStore.create({
               mongoUrl: "mongodb://127.0.0.1:27017",
            
                autoRemove: "disabled",
              }),
}))



app.use(express.json())
app.use(express.urlencoded({   
    extended: false
}))  


app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);


//
const db="mongodb+srv://mohityadavkkn25:mohit@cluster0.hwrm7lq.mongodb.net/doc?retryWrites=true&w=majority"
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