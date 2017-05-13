/**
 * Created by SOFTMAN on 15-04-2017.
 */
var mongodb = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";
var input = process.argv[2];

mongodb.connect(url, function (err, db) {

    if (err)
        throw  err;

 /*   db.collection('prices').find({}).toArray(function (err, data) {

        if(err)
            throw err
        console.log("query: ",data)

    });
*/
    var collection = db.collection('prices') ;
    collection.aggregate([
        {
            $match : {
                size : input
            }
        },
        {
            $group : {
                _id : "total" ,
                total: {
                    $avg : '$price'
                }
            }
        }]).toArray( function (err, result) {
        if(err)
            throw err;
        console.log(Number(result[0].total).toFixed(2))
        // console.log(Number(result).toFixed(2));
    });
    db.close();


});