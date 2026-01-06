//TODO Importing module
// import { addToCart, totalPrice as price, tq } from "./shopingCart.js";
// console.log("Importing module");
// addToCart("watch", 10);
// console.log(price, tq);
//* import * as shopingCart from "./shopingCart.js";
//* shopingCart.addToCart("coin", 5);
//* console.log(shopingCart.totalPrice);

import testDefaultExporte from "./shopingCart.js";
testDefaultExporte("watch", 100);

// console.log("start feching");
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);
// console.log("finish feching");

// const getLastPost = async function () {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   console.log(data);
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };
// const lastPost = getLastPost();
// lastPost
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
// const lastPost2 = await getLastPost();
// console.log(lastPost2);
const shopingCart = (function () {
  const cart = [];
  const shopingCart = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addToCart = function (products, quantity) {
    cart.push({ products, quantity });
    console.log(`${quantity} ${products} added to cart`);
  };

  const orderStok = function (products, quantity) {
    console.log(`${quantity} ${products} order From Splier`);
  };
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();
shopingCart.addToCart("Coin", 30);
shopingCart.addToCart("kif", 26);
console.log(shopingCart);
