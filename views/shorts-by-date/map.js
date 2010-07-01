function(doc) {
    if(!doc.target) { return; }
    if(!doc.date) {
        doc.date = 0;
    }
    emit(doc.date, {
        date: doc.date,
        target: doc.target,
        key: doc._id
    });
}
