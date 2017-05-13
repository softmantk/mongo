/**
 * Created by SOFTMAN on 15-04-2017.
 */
var mongodb = require('mongodb');
var dbname = process.argv[2];

mongodb.connect('mongodb://localhost:27017/'+dbname, function (err,db) {
    if(err)
        throw err;

    db.collection('users').updateOne({
        "username" : "tinatime"
    }, {
        $set : {
            age:40
        }
    }, function (err, data) {

        if(err)
            throw err


    })
    db.close();

})