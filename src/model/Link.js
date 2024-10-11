const mongoose = require('mongoose');


const Link = mongoose.model('Link', 
    {
        name: String,
        url: String,
        visible: Boolean,
        archived: Boolean
    }
);

module.exports = Link
