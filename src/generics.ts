// componente que pode funcionar com varios tipos

// T - caracter padrão, podemos especificar o tipo de dados ao chamar a função
function f_teste<T>(v:T): T{
  return v
}

// definindo qual tipo de dados vai ser usado: 
console.log(f_teste<number>(10))
console.log(f_teste<string>('10'))

function f_teste2<T, U>(v: T): U {
  let x = v as unknown as U;
  return x
}

// podendo ser chamada com dois tipos genericos 
console.log(f_teste2<number, string>(10))


class C_teste<T>{
  valor: T

  constructor(valor: T) {
    this.valor = valor
  }
}

const cTeste = new C_teste<number>(10)
const cTeste2 = new C_teste<string>('oi')
