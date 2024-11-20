// promise
// sinc = همگام - asinc = نا همگام

let state = "seccess";
const getUserList = new Promise(function (resolve, reject) {
  // میگم بعد از مثلا یک ثانیه یک عملیات رو شبیه سازی کنیم از ست تایم اوت استفاده میکنیم
  setTimeout(() => {
    if (state == "seccess") {
      //   resolve("Users list");
      // we write user list in arrey
      resolve([
        {
          id: 1,
          name: "User1"
        },
        {
          id: 2,
          name: "User2"
        },
      ]);
    } else {
      reject("not found eny user");
    }
  }, 1500);
});

// برای اینکه بخوایم دیتا رو بخونیم از دن استفاده میکنیم
// پایین میگم بیا دیتا رو بگیر و نمایش بده از گت یوزر
getUserList.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});
