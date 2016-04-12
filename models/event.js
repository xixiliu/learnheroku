var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// See http://mongoosejs.com/docs/schematypes.html

var eventSchema = new Schema({
  what: String,
  mood: String,
  who: String,
  imageUrl: String,
  dateAdded : { type: Date, default: Date.now }
})

// export 'Person' model so we can interact with it in other files
module.exports = mongoose.model('Eventlist',eventSchema);