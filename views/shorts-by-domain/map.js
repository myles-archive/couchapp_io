function(doc) {
    if(!doc.target) { return; }
    if(!doc.date) {
        doc.date = 0;
    }
    emit(doc.target.split(/\/+/g)[1], {
        date: doc.date,
        target: doc.target,
        key: doc._id,
        short_url: 'http://myl.be/' + doc._id,
    });
}
