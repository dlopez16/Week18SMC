
var mongoose = requiere('mongoose');


var Schema = mongoose.Schema;

var StorySchema = new Schema({

headline:{
	type: String,
	trim: true,

}



})



var StorySc= mongoose.model('Story', StorySchema);

module.exports = StorySc;