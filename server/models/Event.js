const mongoose = require('mongoose');
const eventSchema = new mongoose.Schema({
    name: {type: String, require: true},
    organize: {type: String, require: true},
    location: {type: String, require: true},
    date: {type: Date, require: true},
    description: {type: String, require: true},
    capacity: {type: Number, require: true},
    date: {type: String, require: true}, }, {timestamps: true});
    
module.exports = mongoose.model('Event', eventSchema);