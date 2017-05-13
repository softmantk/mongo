/**
 * Created by SOFTMAN on 15-04-2017.
 */
var mongodb = require('mongodb').MongoClient ;
var searchString =parseInt(process.argv[2]) ;
var url = "mongodb://localhost:27017/learnyoumongo" ;
mongodb.connect(url, function (err, db ) {

    var data = db.collection('parrots') ;

    data.find({
        age: {$gt : searchString}
    }).toArray(function (err, documents) {

        if(err) {
            console.log(err)
        }
        console.log(documents)
    });

    db.close();



});