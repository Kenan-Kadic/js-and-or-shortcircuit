'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// OR RETURNS FIRST TRUTHY OPERANT--OR LAST VALUE IF ALL ARE FALSY

// THE AND OPERATOR RETURNS 1ST FALSY VALUE - OR LAST VALUE IF ALL OF THEM ARE TRUTHY

// -- THE OR OPERATOR ---
console.log('---OR OPERATOR---')

// YOU CAN USE AND and OR to SHORT CIRCUIT things

console.log(3 || 'Jonas');
// If first value is truthy, second value will not even be looked at

console.log('' || 'Jonas');
// this gives you Jonas

console.log(true || 0);
//this gives you true

console.log(undefined || null);
// this gives you null

console.log(undefined || 0 || '' || 'Hello' || 23 || null);
// result is HELLO because hello is the first truthy value

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1)
//this gives you undefined or 10 so it is 10

//NOW
restaurant.numGuests = 23;

const guest2 = restaurant.numGuests || 10
console.log(guest2);

// SHORT CIRCUITING BASED TESTS LIKE THE ONE ABOVE ONLY WORK ON TRUTHY VALUES
// DON'T COMPARE ZERO TO SOMETHING--ZERO NEVER EXISTS

// --- THE AND OPERATOR ---
console.log('---AND OPERATOR---')

// THE AND OPERATOR WORKS IN THE OPPOSITE WAY OF OR OPERATOR

// IT PRINTS THE FIRST FALSE VALUE

console.log(0 && 'Jonas')
// this will print zero

console.log(7 & 'Jonas')
// this will print 'Jonas'

console.log('Hello' && 23 && null && 'jonas');
// this will print null

//checking if something exists

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach')
}

// this can replace an if statement! BUT MOST PEOPLE DON'T DO THIS!
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach')

// THE NULLISH COALESCING OPERATOR

restaurant.numGuests = 0
const guests = restaurant.numGuests || 10;
console.log(guests)
// this will give you 10

// THIS OPERATOR IS FROM ES11 or ES2020

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
// this gives you the actual zero
// WHY DOES THIS WORK -- it works with nullish values instead of falsy values--null or undefined
//this does not include zero or empty string--it is pretending as if these 2 values are true

