const express = require('express');

var router = express.Router();

const mongoose= require('mongoose');

const movieSchema = new mongoose.Schema({
    Title: String,
    Director: String,
    Year: Number,
    Rating: Number
  });
  
  mongoose.model('Movie', movieSchema);

const Movie=mongoose.model('Movie');



router.get('/',(req,res)=>{
res.render("movie/addOrEdit", {
    viewTitle : "Insert Movie"
});

});

router.post('/',(req,res)=>{
    insertRecord(req,res);
    
    });

function insertRecord(req,res){
    var movie= new Movie();
    movie.Title=req.body.Title;
    movie.Director=req.body.Director;
    movie.Year=req.body.Year;
    movie.Rating=req.body.Rating;
    movie.save((error,doc)=>{
        if(!error)
            res.redirect('movie/list');
        else
            console.log('Error :'+error);
    });

}

router.get('/list',(req,res)=>{
    res.render("movie/list",{
        list: res
    });

});

module.exports = router;