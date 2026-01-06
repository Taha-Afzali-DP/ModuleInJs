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

const getLastPost = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
};
