/* 14. Calculate the final order price
A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of
objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on
the unit price and quantity of each item. */


let cart = [
  {
    item: 'pen',
    price: 100,
    quantity: 2,
  },
  {
    item: 'pencile',
    price: 100,
    quantity: 2,
  },
  {
    item: 'rubber',
    price: 100,
    quantity: 2,
  },
  {
    item: 'Ruler',
    price: 100,
    quantity: 2,
  },
] ;
let cost = 0 ;
cart.forEach((element) => {
    itemsInCart = element.item ;
    itemsInCart = element.price;

  cost += element.price * element.quantity
})

console.log(cost) ;