var mongodb = require('mongodb').MongoClient ;
var url = 'mongodb://localhost:27017/learnyoumongo';
var fname = process.argv[2];
var lname = process.argv[3];

var obj = {
    firstName : fname,
    lastName : lname
};

mongodb.connect(url, function (err, db) {
    if(err) {
        return err
    }
    var collection = db.collection('docs') ;


    collection.insert(obj, function (err, data) {
        if(err) {
            throw err
        }
        console.log(JSON.stringify(obj));
        db.close();

    });

})