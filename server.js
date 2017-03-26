/**
 * Created by del on 2017/3/26.
 */
let express=require('express');
let Movie=require('./model');
let path=require('path');
let app=express();
app.set('view engine','html');
app.set('views',path.resolve('views'));
app.get('/',function(){
    Movie.find({},function(){})
});