//TODO Importing module
import {
  addToCart,
  totalPrice as price,
  totalQuantity,
} from "./shopingCart.js";
console.log("Importing module");
addToCart("watch", 10);
console.log(price, totalQuantity);
