/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: In the global execution context (outside of any function), this refers to the global object whether in strict mode or not.
* 2. Implicit Binding: Implicit binding occurs when dot notation is used to invoke a function.
* 3. New binding: Uses a constructor function with the new keyword to build a new instance. The this keyword inside the function is bound to the new object.
* 4. Explicit binding: Explicit binding of this occurs when .call(), .apply(), or .bind() are used on a function.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("Aaron");

// Principle 2
// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Aaron');

// Principle 3
// code example for New Binding
function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  newman.speak();
  newman.speak();

// Principle 4
// code example for Explicit Binding

const yourObject = {
    name: 'Aaron',
    city: 'GA',
    favoriteFood: 'Burritos'
  }
  
  const thingsYouEnjoy = ['Mountain Biking', 'Javascript', 'Snowboarding', 'Rafting', 'Movies', 'Music']
  
  function tellUsAboutYourself(thing1, thing2, thing3){
    return `Hi! My name is ${this.name}, I live in ${this.city}, and I enjoy ${thing1}, ${thing2}, and ${thing3}. I love to eat ${this.favoriteFood}.`
  
  }
  
  tellUsAboutYourself.apply(yourObject, thingsYouEnjoy);