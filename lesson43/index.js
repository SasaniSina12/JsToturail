// modules
// mini project

import { getUsersFromDB, SystemMessage } from "./users.js";
// ایمپورت کن هرچیزی رو از پروداکت دات جی اس
import getProductFromDB from "./products.js";
import getUserBasket from "./user-basket.js";

async function main() {
  try {
    const users = await getUsersFromDB();
    const products = await getProductFromDB();
    getUserBasket().then(result => {
      console.log(result);
    });
    // console.log(users);
    // console.log(products);
    // console.log(userBasket);
  } catch (error) {
    console.error(error);
  }
}

main();
