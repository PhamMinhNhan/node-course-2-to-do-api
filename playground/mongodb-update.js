
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect Mongo database');
  }

  console.log('Connected Mongo database');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectId("59e317f763c45ee9a4fa0354")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectId("59e3214263c45ee9a4fa05b6")
  }, {
    $set: {
      name: 'Nhan'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })

});
