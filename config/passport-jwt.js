const passport = require('passport');
const Doctor=require('../models/doctor')

var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {
jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
secretOrKey :'secret',
}
// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';
passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
    console.log('inside jwt %%%%%%%%%%%%%%')
    try{
        Doctor.findById(jwt_payload._id, (err, doctor) => {
            if (err) console.log("Error finding error from JWT");
            if (doctor) return done(null, doctor);
            else return done(null, false);
          });
//    const doctor =await Doctor.findOne({id: jwt_payload.sub})
      
//         if (doctor) {
//             return done(null,doctor );
//         } else {
//             return done(null, false);
//             // or you could create a new account
//         }
    }catch(err){
        return done(err, false);
    }

}));



module.exports=passport