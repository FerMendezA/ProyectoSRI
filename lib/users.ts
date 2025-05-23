export interface User {
  id: string;
  name: string;
  username: string;
  password: string;
}

export const users: User[] = [
  // Usuario inicial de demo:
  { id: "1", name: "Demo User", username: "demo", password: "demo" },
];

export function findUser(username: string) {
  return users.find((u) => u.username === username);
}

export function addUser(name: string, username: string, password: string) {
  const id = (users.length + 1).toString();
  const newUser: User = { id, name, username, password };
  users.push(newUser);
  return newUser;
}
