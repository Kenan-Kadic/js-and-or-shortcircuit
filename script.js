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

