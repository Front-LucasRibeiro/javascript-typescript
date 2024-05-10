import './style.css'
import { enums } from './enum';
import { types } from './tipagem';
import { assertion } from './assertion';
import { functions } from './functions';
import rest from './rest-spread';
import Computador, { Pessoa } from './POO';
import { desestruturacao } from './desestruturacao';
import { Globais } from './static';

// exec 
types()
enums()
assertion()
functions()
rest()
Computador
let pessoa = new Pessoa('Lucas', 32);
// console.log(pessoa.fala('ola tudo bem'))
// console.log(pessoa.getBankAccount())
console.log(desestruturacao())
console.log(Globais.teste)




document.querySelector<HTMLDivElement>('#app')!.innerHTML = ``

