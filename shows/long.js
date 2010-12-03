function(doc, req) {
    if(!doc && !req.id) {
        return {
            code: 200,
            body: "<p>Hey there, this is @<a href=\"http://twitter.com/mylesb\" title=\"Myles Braithwaite's\">mylesb</a>'s personal URL shortener. Make your own with <a href=\"http://github.com/janl/io\">io</a>.</p>"
        }
    }
    
    var source;
    if(doc) {
        source = doc._id;
    } else if(req.id) {
        source = req.id;
    }
    
    var sane_source = source.replace(/[\,\.\)]$/, "");
    
    if(source != sane_source) {
        // redirect to real short
        return {
            code: 302,
            headers: {"Location": "http://myl.be/" + sane_source},
            body: "If you don't get redirected, please go to http://myl.be/" + sane_source + "\n"
        };
    }
    
    return {
        code: 302,
        headers: {"Location": doc.target},
        body: "If you don't get redirected, please go to " + doc.target + "\n"
    };
}
