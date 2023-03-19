const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://movie:movie@cluster0.r8efqki.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true}, (error)=>{
    if(!error) {console.log('succeeded')}
    else{console.log('Error : '+ error)}
});

/*mongoose.connect('mongodb://localhost:27017/Movies');*/

require('./movie.model');