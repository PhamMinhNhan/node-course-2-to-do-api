const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/user');

// const id = '59ec630420485ba42b02794e';
const id = '59e76934aa4d63344e246084';

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Find todos ',todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Find todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     console.log('Id not found');
//   }
//
//   console.log('Find by Id', todo);
// }).catch((e) => console.log(e));

Users.findById(id).then((user) => {
  if (!user) {
    console.log('User not found');
  }

  console.log('Find user by Id', user);
}).catch((e) => console.log(e));
