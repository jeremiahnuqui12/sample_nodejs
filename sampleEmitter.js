//
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greetings(res){
//     res.write(`My Name is ${this.name} and i am ${this.age}`);
//     // res.end();
//   }
// }
//
// module.exports = Person;
const EventEmitter = require('events');
//Create Class
class MyEmitter extends EventEmitter {
  greetings(){
    console.log("Event FIRED!!!");
  }
}
//Init Object
const myEmitter = new MyEmitter();
// Event Listener
// myEmitter.on('greetings', () => {
//   console.log('Event Fireed!!!')
// });
// myEmitter.emit('greetings');
module.exports = function(res){
  
};
