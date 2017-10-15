
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect Mongo database');
  }

  console.log('Connected Mongo database');

  // deleteMany
  // db.collection('Users').deleteMany({name: 'Jane'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete

  db.collection('Users').findOneAndDelete({
    _id: new ObjectId("59e2db394cd30013e015028d")
  }).then((result) => {
    console.log(result);
  })
});
