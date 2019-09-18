/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding: If the .this keyword is not pointed in any particular direction, it defaults to the window object, unless we are in strict mode, when it will default to undefined.
* 2. Implicit binding: In implicit binding, the .this keyword refers to whatever is placed before the dot.  This only applies to objects with methods.
* 3. New binding:
* 4. Explicit binding:
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

// Principle 4

// code example for Explicit Binding