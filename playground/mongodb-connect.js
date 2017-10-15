const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect Mongo database');
  }

  console.log('Connected Mongo database');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false,
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

  db.collection('Users').insertOne({
    name: 'Nhan',
    age: 28,
    location: 'Binh Tan district'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert Users', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});
