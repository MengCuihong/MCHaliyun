/**
 * Created by del on 2017/3/26.
 */
var async=require('async');
var read=require('./read');
var write=require('./write');
var url = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1&qq-pf-to=pcqq.group';

var logger=require('debug')('crawl:main');
async.waterfall([
    function(callback){
    read(url,callback);
},
    function(movies,callback){
        write(movies,callback);
    }
    ],function(err,result){

    });