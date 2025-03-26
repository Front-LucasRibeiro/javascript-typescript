// Usar Symbols Para evitar conflitos em propriedades de objetos.
// ✅ Para criar propriedades "privadas" em classes.
// ✅ Para definir identificadores únicos em sistemas complexos.
// ✅ Para trabalhar com APIs que utilizam Symbol (como iteradores, toStringTag, etc.).

export default function createSymbol() {
  const sym1 = Symbol("identificador");
  const sym2 = Symbol("identificador");

  console.log(sym1 === sym2); // false (mesmo nome, mas diferentes)
  const ID = Symbol("id");

  const usuario = {
    nome: "Lucas",
    [ID]: 12345, // Usando Symbol como chave
  };

  console.log(usuario); // { nome: 'Lucas', [Symbol(id)]: 12345 }
  console.log(usuario[ID]); // 12345

  const symA = Symbol.for("compartilhado");
  const symB = Symbol.for("compartilhado");

  console.log(symA === symB); // true (compartilham a mesma referência)

  const senha = Symbol("senha");

  const user = {
    nome: "Rayane",
    [senha]: "1234seguro",
  };

  console.log(user.senha); // undefined
  console.log(Object.keys(user)); // ['nome']
  console.log(Object.getOwnPropertySymbols(user)); // [ Symbol(senha) ]

  const _saldo = Symbol("saldo"); // "Propriedade privada"
}

class Conta {
  constructor(valor) {
    this[_saldo] = valor;
  }

  depositar(valor) {
    this[_saldo] += valor;
  }

  get saldo() {
    return this[_saldo];
  }
}

const minhaConta = new Conta(1000);
minhaConta.depositar(500);

console.log(minhaConta.saldo); // 1500
console.log(minhaConta._saldo); // undefined (não acessível diretamente)
