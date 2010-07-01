function(head, req) {
    // !json templates.index
    // !code vendor/mustache.js/mustache.js
    
    provides("html", function() {
        send(templates.index.head);
        var row;
        while(row = getRow()) {
            send(Mustache.to_html(templates.index.row, {
                target: row.value.target,
                date: row.value.date,
                id: row.value.key
            }));
        }
        send(templates.index.tail);
    });
}