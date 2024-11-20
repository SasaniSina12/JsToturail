const products = [
  {
    id: 1,
    title: "Book1",
    price: 200,
  },
  {
    id: 2,
    title: "Shoes",
    price: 300,
  },
  {
    id: 3,
    title: "Coat",
    price: 250,
  },
  {
    id: 4,
    title: "Laptop",
    price: 1500,
  },
];

function getProductFromDB() {
  return new Promise((resulve, reject) => {
    if (products.length > 0) {
      resulve(products);
    } else {
      reject(new Error("Not found eny products"));
    }
  });
}
export default getProductFromDB;
