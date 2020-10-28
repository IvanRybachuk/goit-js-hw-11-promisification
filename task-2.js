const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const updatedUsers = allUsers.map((user) =>
        user.name === userName ? { ...user, active: !user.active } : user
      );
      resolve(updatedUsers);
    }, 1000);
  });
};

const loggers = (updatedUsers) => console.table(updatedUsers);

/*
 * Сейчас работает так
 */
toggleUserState(users, "Mango", loggers);
toggleUserState(users, "Lux", loggers);

/*
 * Должно работать так
 */
toggleUserState(users, "Mango").then(loggers);
toggleUserState(users, "Lux").then(loggers);
