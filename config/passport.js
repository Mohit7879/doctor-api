const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const Doctor = require('../models/doctor');


// authentication using passport
passport.use(new LocalStrategy({
        usernameField: 'contact',
        passReqToCallback: true
    },
    async function(req,contact, password, done){
        // find a user and establish the identity
                  console.log(contact);
        try{
       let doctor= await Doctor.findOne({contact: contact})

        console.log('inside strategy');
          

        if (!doctor || doctor.password != password){
             
                return done(null, false);
            }

            return done(null, doctor);
        
        }catch(err){

             return done(err);

    }
    
    }));




// serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(doctor, done){
    done(null, doctor.id);
    console.log('inside serialiser')
});



// deserializing the user from the key in the cookies
passport.deserializeUser(async function(id, done){
   let doctor=await  Doctor.findById(id);
      
   console.log('inside derialiser')
      //  console.log(doctor)

        return done(null, doctor);
    });


// check if the user is authenticated
passport.checkAuthentication = function(req, res, next){
    // if the user is signed in, then pass on the request to the next function(controller's action)
    if (req.isAuthenticated()){
        console.log('inside checkauhentcate')
        return next();
    }

    // if the user is not signed in
    return res.redirect('/doctors/regester');
}

passport.setAuthenticatedUser = function(req, res, next){
    if (req.isAuthenticated()){
        // req.user contains the current signed in user from the session cookie and we are just sending this to the locals for the views
      console.log('inside setauthentication')
        res.locals.doctor = req.doctor;
        console.log("&&&&&&&&&&",req.doctor)
    }

    next();
}



module.exports = passport;