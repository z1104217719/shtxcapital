
/*
 * GET users listing.
 */

exports.index = function(req, res){
    res.render('index',
        { title: 'Express',
            layout:'layout',
            staticPath:'./',
            pageName:'index'
        }
    );
};

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.about = function(req,res){
    res.render(req.url.split(".")[0].substring(1),
        { title: 'Express',
            layout:'layout',
            staticPath:'../'
        }
    );
}

exports.invest = function(req,res){
    res.render(req.url.split(".")[0].substring(1),
        { title: 'Express',
          layout:'layout',
          staticPath:'../'
//          projectName:'郑州天厦.嘉里中心'
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
    res.render(req.url.split(".")[0].substring(1),
        { title: 'Express',
            layout:'layout',
            staticPath:'../'
        }
    );
}

exports.contact = function(req,res){
    res.render('contact/index',
        { title: 'Express',
            layout:'layout',
            staticPath:'../'
        }
    );
}

exports.job = function(req,res){
    res.render('job/index',{
        title:'Express',
        layout:'layout',
        staticPath:'../'
    });
}

exports.sitemap = function(req,res){
    res.render('sitemap/index',{
        title:'Express',
        layout:'layout',
        staticPath:'../'
    });
}
