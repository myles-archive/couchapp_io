function(doc) {
    if(!doc.target) { return; }
    domain = doc.target.split(/\/+/g)[1];
    emit(domain, 1);
}