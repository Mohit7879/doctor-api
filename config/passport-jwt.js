const passport = require('passport');
const Doctor=require('../models/doctor')

var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {
jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
secretOrKey :'secret',
}

passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
    
    try{
        // Doctor.findById(jwt_payload._id, (err, doctor) => {
        //     if (err) console.log("Error finding error from JWT");
        //     if (doctor) return done(null, doctor);
        //     else return done(null, false);
        //   });
   const doctor =await Doctor.findById( jwt_payload.id)
      
        if (doctor) {
            return done(null,doctor );
        } else {
            return done(null, false);
            // or you could create a new account
        }
    }catch(err){
        return done(err, false);
    }

}));



module.exports=passport