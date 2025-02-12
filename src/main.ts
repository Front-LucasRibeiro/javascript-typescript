import { assertion } from "./assertion";
import { enums } from "./enum";
import { functions } from "./functions";
import Computador, { Pessoa } from "./POO";
import rest from "./rest-spread";
import "./style.css";
import { types } from "./tipagem";
import Tuplas from "./tuplas";

import Union from "./union-types";

// exec
types();
enums();
assertion();
functions();
rest();
Computador;
let pessoa = new Pessoa("Lucas", 32);
// console.log(pessoa.fala('ola tudo bem'))
// console.log(pessoa.getBankAccount())
// console.log(desestruturacao())
// console.log(Globais.teste)
Tuplas();
Union("Lucas");

document.querySelector<HTMLDivElement>("#app")!.innerHTML = ``;
