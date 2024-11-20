// country codes

const codes = {
  98: "IRI",
  44: "UK",
  1: "USA",
};

// میگیم ایا عدد 98 داخل ابجکت کدز هستش
console.log("98" in codes);

// به صورت حلقه هم اینطوری میگیم

for (const code in codes) {
  // if (Object.hasOwnProperty.call(codes, code)) {
  //     const element = codes[code];
  //     console.log(element);
  // }
  console.log("+" + code, " : ", codes[code]);
}
