// P.O.O - Programação orientada a objetos
class Computador {
  nome: string = "Computador Acer";
  ram: number = 0;
  cpu: number = 0;
  ligado: boolean = false;

  // function que é chamada ao ser instanciada 
  constructor() {
    
  }

}

const computadorLucas = new Computador();
const computadorLucas2 = new Computador();

computadorLucas.nome = 'Computador Lenovo';
// console.log(computadorLucas.nome)
// console.log(computadorLucas2.nome)


export class Pessoa {
  nome: string = ''
  idade: number = 0
  gender: string | undefined
  private bankAccount: string | undefined = 'R$ 5000'

  constructor(n: string, i: number, gender?: string) {
    this.nome = n;
    this.idade = i;
    this.gender = gender;
  }

  getBankAccount() {
    return this.bankAccount
  }

  fala(txt:string) {
    return txt
  }
}

class Conta{
  number: number
  name: string
  
  constructor(number: number, name: string) {
    this.number = number
    this.name = name
  }
}
const conta1 = new Conta(500, 'Lucas')

// herança 
class ContaPF extends Conta{
  cnpj: number

  constructor(cnpj: number, number: number, name: string) {
    // enviando os parametros que pertencem a classe pai com super
    super(number, name)
    this.cnpj = cnpj;
  }
}
const contaPJ = new ContaPF(46456464, 5000, 'João')
console.log(contaPJ)








export default Computador;