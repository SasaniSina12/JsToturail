let state = "seccess";
const getUserList = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (state == "seccess") {
            resolve([
                {
                    id: 1,
                    name: "user1"
                },
                {
                    id: 2,
                    name: "user2"
                }
            ])
        } else {
            reject("not found eny user")
        }
    }, 1500)
})

getUserList.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})