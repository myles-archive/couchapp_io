function(head, req) {
  // !json templates.index
  // !code vendor/mustache.js/mustache.js

  // !json lib.bookmarklet
  // !code vendor/couchapp/path.js


  provides("html", function() {
    var prefix = makeAbsolute(req, updatePath("shorten"));

    var blink = lib.bookmarklet.replace("_PREFIX_", prefix);

    var html ='<a href="javascript:'+
      encodeURIComponent(blink) +
      '">drag to your bookmarks bar to make remembering these easy</a>';

    send(html);
    var row;
    
    while(row = getRow()) {
      send(Mustache.to_html(templates.index.row, {
        target: row.value,
        id: row.key
      }));
    }
    send(templates.index.tail);
  });
}
