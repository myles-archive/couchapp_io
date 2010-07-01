function(doc, req) {
    // !json templates.info
    // !code vendor/mustache.js/mustache.js
    
    provides("html", function() {
        send(Mustache.to_html(templates.info.doc, {
            target: doc.target,
            key: doc._id,
            date: doc.date,
        }));
    });
}