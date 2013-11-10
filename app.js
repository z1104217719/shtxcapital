
/**
 * Module dependencies.
 */

var express = require('express');
var controller = require('./routes/controller');
var http = require('http');
var path = require('path');
var partials = require('express-partials');

var app = express();

app.use(partials());

// all environments
app.set('port', process.env.PORT || 4000);
//app.set('views', __dirname + '/views');
//app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('.html', require('ejs').__express);
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser({uploadDir:"./upload"}));
app.use(express.cookieParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));  // 需要在router设置之前，否则会有路径问题



// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', controller.index);
app.get('/index.html', controller.index);
//app.get('/users', controller.list);

app.get('/about/index.html',controller.about);
app.get('/about/ceo.html',controller.about);
app.get('/about/core.html',controller.about);
app.get('/about/domain.html',controller.about);
app.get('/about/idea.html',controller.about);
app.get('/about/org.html',controller.about);
app.get('/about/guangzhouzhangxin.html',controller.about);
app.get('/about/hanzhonghengda.html',controller.about);

app.get('/about/luoyangxinlian.html',controller.about);
app.get('/about/shanghaiyidan.html',controller.about);
app.get('/about/tianxiabeijing.html',controller.about);
app.get('/about/tianxiahenan.html',controller.about);
app.get('/about/tianxiazhengzhou.html',controller.about);
app.get('/about/xianhengda.html',controller.about);
app.get('/about/xianhengtai.html',controller.about);


app.get('/invest/index.html',controller.invest);
app.get('/invest/xianluoma.html',controller.invest);
app.get('/invest/zztxjiali.html',controller.invest);
app.get('/invest/hzlanhua.html',controller.invest);

app.get('/manage/index.html',controller.manage);
app.get('/manage/15.html',controller.manage);
app.get('/manage/16.html',controller.manage);

app.get('/news/index.html',controller.news);
app.get('/news/private.html',controller.news);
app.get('/news/industry.html',controller.news);

app.get('/contact/index.html',controller.contact);

app.get('/job/index.html',controller.job);

app.get('/sitemap/index.html',controller.sitemap);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
