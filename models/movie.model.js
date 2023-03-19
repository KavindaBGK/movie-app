const mongoose = require("mongoose");

var movieschema= new mongoose.Schema({
    Title:{
        type:String
    },

    Director:{
        type:String
    },

    Year:{
        type:String
    },

    Rating:{
        type:String
    },

});

mongoose.model('moviedata',movieschema );


