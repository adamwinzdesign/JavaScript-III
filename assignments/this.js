/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding: If the .this keyword is not pointed in any particular direction, it defaults to the window object, unless we are in strict mode, when it will default to undefined.
* 2. Implicit binding: In implicit binding, the .this keyword refers to whatever is placed before the dot.  This only applies to objects with methods.
* 3. New binding:
* 4. Explicit binding: In explicit binding, we are telling the browser/JS Engine explicitly what .this refers to, using call, apply, and bind.  Call immediately invokes the function.  Call passes arguments one by one.  Apply also immediately invokes the function also, but arguments are passed in as an array.  Bind passes arguments one by one, but it does not immediately invoke the function, it returns a brand new function that can be invoked later.  In other words, call, apply, and bind can be used to invoke a function with a specific value for this.  Bind is used to make a new function that is bound to a function.
* 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
'use strict';

function trumpet(){
  console.log(this.blaarp);
}
trumpet();
const blaarp = '🎺';  // cannot read property blaarp of undefined

// Principle 2

// code example for Implicit Binding

let myTrumpet = {
  type: 'trumpet',
  cost: 350,
  condition: 'used',
  noise: 'prrrrt',
  blaarp: function(){
    console.log(`The ${this.condition} ${this.trumpet} goes ${this.noise}!`);
  }
}

myTrumpet.blaarp();

// Principle 3

// code example for New Binding
// Using new creates a new object, .this points to it.

function Instrument(sound) {
  this.timbre - sound;
}

let keyboard = new Instrument('blingablingblong');

console.log(keyboard.timbre);

// Principle 4

// code example for Explicit Binding
// call

function makeNoise(){
  console.log(this.blart);
}

let myTrombone = {
  condition: 'new',
  blart: 'fruuuuuut'
}

makeNoise.call(myTrombone);

// bind

function makeNoise(){
  console.log(this.blart);
}

let myTrombone = {
  condtion: 'new',
  blart: 'fruuuuuut'
}

tromboneNoise = makeNoise.bind(myTrombone);

tromboneNoise();
