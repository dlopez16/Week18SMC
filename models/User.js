var mongoose = require('mongoose');


var Schema = mongoose.Schema;


var UserSc = new Schema({
  // username is a string. We will trim any trailing whitespace. And it's required.
  username: {
    type: String,
   }
 };
 
// create the "User" model with our UserSchema schema
var User = mongoose.model('User', UserSchema);

// export the User model, so it can be used in server.js with a require.
module.exports = User;