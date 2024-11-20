// سبد خرید یک کاربر
import { getUsersFromDB } from "./users.js";
import getProductFromDB from "./products.js";
const userBasket = [
  {
    id: 1,
    productID: 1,
    userID: 2,
    count: 2,
  },
  {
    id: 2,
    productID: 2,
    userID: 2,
    count: 3,
  },
  {
    id: 3,
    productID: 4,
    userID: 2,
    count: 1,
  },
];



function getUserBasket() {
  return new Promise((resolve, reject) => {
    let newUserBasket = null;
    getProductFromDB().then((products) => {
      for (const product of products) {
        newUserBasket = userBasket.map((itme) => {
          if (itme.productID == product.id) {
            // itme.product = product;
            Object.assign(itme, {product})
            itme.totalPrice = product.price * itme.count;
            getUsersFromDB().then((users) => {
              itme.user = users.find((user) => user.id == itme.userID);
            });
        }
        return itme;
        });
      }
      resolve(newUserBasket);
    });
  });
}
export default getUserBasket;
