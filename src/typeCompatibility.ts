// Para verificar se dogpode ser atribuído a pet,
// o compilador verifica cada propriedade de petpara encontrar uma propriedade compatível correspondente em dog.
// Neste caso, dogdeve ter um membro chamado nameque seja uma string. Ele tem, então a atribuição é permitida.

interface Pet {
  name: string;
}
let pet: Pet;
// dog's inferred type is { name: string; owner: string; }
let dog = { name: "Lassie", owner: "Rudd Weatherwax" };
pet = dog;

let x = () => ({ name: "Alice" });
let y = () => ({ name: "Alice", location: "Seattle" });
x = y; // OK
y = x; // Error, because x() lacks a location property

// As classes funcionam de forma semelhante a tipos literais de objetos e interfaces, com uma exceção: 
// elas têm um tipo estático e um tipo de instância. Ao comparar dois objetos de um tipo de classe, apenas os membros da instância são comparados. 
// Membros estáticos e construtores não afetam a compatibilidade.

class Animal {
  feet: number;
  constructor(name: string, numFeet: number) {}
}
class Size {
  feet: number;
  constructor(numFeet: number) {}
}
let a: Animal;
let s: Size;
a = s; // OK
s = a; // OK