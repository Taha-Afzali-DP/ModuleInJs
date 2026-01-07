// TODO Exporting module
console.log("start feching users");
// await fetch("https://jsonplaceholder.typicode.com/users");
console.log("finish fdching");
console.log("Exporting module");
const shopingCost = 10;
const cart = [];
export const addToCart = function (products, quantity) {
  cart.push({ products, quantity });
  console.log(`${quantity} ${products} added to cart`);
};
const totalPrice = 237;
const totalQuantity = 23;
// export { totalPrice, totalQuantity as tq };

//! default Export ::
export default function (products, quantity) {
  cart.push({ products, quantity });
  console.log(`${quantity} ${products} added to cart`);
}
