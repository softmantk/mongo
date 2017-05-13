/**
 * Created by SOFTMAN on 15-04-2017.
 */
var mongodb = require('mongodb').MongoClient;
var searchInt = parseInt(process.argv[2]);
var url = 'mongodb://localhost:27017/learnyoumongo';
mongodb.connect(url, function (err, db) {
    if(err) {
        return err;
    }

    db.collection('parrots').find({
        age : {$gt : searchInt}
    }, {
        name : 1,
        age : 1,
        _id: 0
    }).toArray(function (err, documents) {
        if(err) {
            console.log(err)
        }
        console.log(documents)
    });
    db.close();
})
