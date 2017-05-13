/**
 * Created by SOFTMAN on 15-04-2017.
 */
var mongodb = require('mongodb');

var dbname = process.argv[2];
var collection = process.argv[3];
var id = process.argv[4];

mongodb.connect('mongodb://localhost:27017/'+dbname, function (err, db) {
    if (err)
        throw  err
    db.collection(collection).remove({
        _id : id
    });
    db.close();
})