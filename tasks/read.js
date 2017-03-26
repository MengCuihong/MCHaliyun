/**
 * Created by del on 2017/3/26.
 */
var request=require('request');
var iconv=require('iconv-lite');
var cheerio=require('cheerio');
var debug=require('debug');
var logger=debug('crawl:read');
module.exports=function(url,callback){
    request({url,encoding:null},function(err,response,body){
        body=iconv.decode(body,'gbk');
        var movies=[];
        var $=cheerio.load(body);
        $('.keyword .list-title').each(function(){
            var $this=$(this);
            var movie={
                name:$this.text(),
                url:$this.attr('href')
            };
            logger(`读取到电影：${movie.name}`);
            movies.push(movie);
        });
        callback(err,movies);
    })
};
var url = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1&qq-pf-to=pcqq.group';
module.exports(url,function(err,movies){
    //console.log(movies);
});