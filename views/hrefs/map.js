function(doc) {
  // !code lib/htmlparser.js
  // emit("ok",doc._id)
  if (doc && doc.form && doc.form.body) {
    var html = doc.form.body;
    var url;
    var t = false;
    try {
      HTMLParser(html, {
        start: function( tag, attrs, unary ) {
          if (tag == "a") {
            for (var i=0; i < attrs.length; i++) {
              if (attrs[i].name == "href") {
                url = attrs[i].value
                // emit(url,null)
                t = true
              }
            };
          }
        },
        end: function( tag ) {
        },
        chars: function( text ) {
          if (t) emit(url, text);
          t = false;
        },
        comment: function( text ) {
        }
      });
      
    } catch(e) {
      emit("fail",doc.target)
    }
    

  }
};