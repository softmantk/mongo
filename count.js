/**
 * Created by SOFTMAN on 15-04-2017.
 */

var mongodb = require('mongodb');
var age = parseInt(process.argv[2]);
var url = "mongodb://localhost:27017/learnyoumongo";

mongodb.connect(url, function (err, db) {
    if (err)
        throw err
    db.collection('parrots').count({
        "age" : age
    }, function (err, count) {
        console.log(count)
    })
    db.close()
})