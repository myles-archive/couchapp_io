function(doc) {
  // !code lib/htmlparser.js
  // emit("ok",doc._id)
  if (doc && doc.form && doc.form.body) {
    var html = doc.form.body;
    
    HTMLParser(html, {
      start: function( tag, attrs, unary ) {
        emit(tag, attrs);
      },
      end: function( tag ) {
      },
      chars: function( text ) {
      },
      comment: function( text ) {
      }
    });

  }
};