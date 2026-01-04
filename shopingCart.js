//TODO Exporting module
console.log("Exporting module");
const shopingCost = 10;
const cart = [];
const addToCart = function (products, quantity) {
  cart.push({ products, quantity });
  console.log(`${quantity} ${products} added to cart`);
};
