//TODO Exporting module
console.log("Exporting module");
const shopingCost = 10;
const cart = [];
export const addToCart = function (products, quantity) {
  cart.push({ products, quantity });
  console.log(`${quantity} ${products} added to cart`);
};
const totalPrice = 237;
const totalQuantity = 23;
export { totalPrice, totalQuantity as tq };
