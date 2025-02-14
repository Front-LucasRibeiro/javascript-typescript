// A expressão as const instrui o TypeScript a inferir os valores exatos da lista
// (ou seja, os tipos literais "Lucas", "Rayane", e "João") ao invés de apenas string.
// Os elementos do array são imutáveis (não podem ser alterados).

const people = ["Lucas", "Rayane", "João"] as const; // readonly ["Lucas", "Rayane", "João"]

people[1];

type Status = "active" | "inactive" | "pending";

let userStatus: Status;
userStatus = "active"; // válido
userStatus = "inactive"; // válido
// userStatus = "deleted"; // inválido, TypeScript mostrará um erro
