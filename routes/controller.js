
/*
 * GET users listing.
 */

exports.index = function(req, res){
    res.render('index',
        { title: 'Express',
            layout:'layout',
            staticPath:'./'
        }
    );
};

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.about = function(req,res){
    res.render('about/index',
        { title: 'Express',
            layout:'layout',
            staticPath:'../'
        }
    );
}

exports.invest = function(req,res){
    res.render('invest/index',
        { title: 'Express',
            layout:'layout',
            staticPath:'../'
        }
    );
}

exports.manage = function(req,res){
    console.log(req.url);

    if(req.url != "/manage/index.html"){
        res.render(req.url.split(".")[0].substring(1),
            { title: 'Express',
//                layout:'layout',
                staticPath:'../'
            }
        );
    }else{
        res.render('manage/index',
            { title: 'Express',
                layout:'layout',
                staticPath:'../'
            }
        );
    }
}

exports.news = function(req,res){
    res.render('news/index',
        { title: 'Express',
            layout:'layout',
            staticPath:'../'
        }
    );
}
