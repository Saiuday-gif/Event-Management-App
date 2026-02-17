const mongoose = require('mongoose');
const registrationSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true},
    eventId: {type: mongoose.Schema.Types.ObjectId, ref: 'Event', require: true}, }, {timestamps: true});

module.exports = mongoose.model('Registration', registrationSchema);