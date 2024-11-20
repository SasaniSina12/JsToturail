const users = [
  {
    id: 1,
    name: "Sina Sasani",
    job: "developer",
    skill: "NodeJS",
  },
  {
    id: 2,
    name: "Mohammad Sasani",
    job: "developer",
    skill: "NodeJS",
  },
  {
    id: 3,
    name: "Reza Sasani",
    job: "developer",
    skill: "NodeJS",
  },
  {
    id: 4,
    name: "Erfan Yousefi",
    job: "developer",
    skill: "NodeJS",
  },
  {
    id: 5,
    name: "Ayhan Sasani",
    job: "developer",
    skill: "NodeJS",
  },
  {
    id: 6,
    name: "Alisan Sasani",
    job: "developer",
    skill: "NodeJS",
  },
];

export function getUsersFromDB() {
  return new Promise((resolve, reject) => {
    if (users.length > 0) {
      resolve(users);
    } else {
      reject(new Error("not find any users"));
    }
  });
}

export const SystemMessage = "Hello welcome to my website";
