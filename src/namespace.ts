namespace Veiculos{
  export class Carro{
    nome: string
  
    constructor(nome: string) {
      this.nome = nome
    }
  }
}

export namespace Motores { 

  export class Motor{
    potencia: number
  
    constructor(p: number) {
      this.potencia = p
    }
  }
}


const c1 = new Veiculos.Carro('Golf')

