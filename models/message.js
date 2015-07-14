var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
        sender: String,
        body: String
    });

mongoose.model('Message', MessageSchema);
