import './style.css'
import { enums } from './enum';
import { types } from './tipagem';
import { assertion } from './assertion';
import { functions } from './functions';
import rest from './rest-spread';
import Computador, { Pessoa } from './POO';

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




document.querySelector<HTMLDivElement>('#app')!.innerHTML = ``

