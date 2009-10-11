function(doc, req) {
  // !json lib.bookmarklet
  // !code vendor/couchapp/path.js

  var prefix = makeAbsolute(updatePath("shorten"));
  
  var blink = lib.bookmarklet.replace("_PREFIX_", prefix);
  
  var html ='<a href="javascript:'+
    encodeURIComponent(blink) +
    '">drag to your bookmarks bar to make remembering these easy</a>'
  return {
    body: html
  };
}
