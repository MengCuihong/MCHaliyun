/**
 * Created by del on 2017/3/26.
 */
let mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/201614crawl');
var MovieSchema=new mongoose.Schema({
    name:String,
    url:String
    //createAt:{type:Date,default:Date.now}
});
//定义并导出模型
exports.Message = mongoose.model('Message',MessageSchema);
