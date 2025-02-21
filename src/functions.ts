// especificar o return da função, void é o padrão
export const functions = (): void => {
  function login(user: string, password: string) {
    console.log(`
      user: ${user} 
      password: ${password}
    `);
  }
  // login('Lucas','123')

  function sum(n1: number, n2: number): number {
    return n1 + n2;
  }
  // console.log(sum(2, 5))

  let number: number = sum(5, 5);
  let res: string = sum(2, 8).toString(); // recebe a soma do tipo number e converte o resultado em string
  // console.log(res)

  // parametros default
  function sum2(n1: number = 0, n2: number = 0): number {
    return n1 + n2;
  }
  sum2(5);

  // parametros opcionais
  function userNew(user: string, pass: string, name?: string) {
    console.log(`
      ${user}
      ${pass}
      ${name}
    `);
  }
  // userNew('Lucas', '123')
};

// arrow functions precisam ser chamadas depois da declaração
// function da maneira tradicional podem ser chamadas antes da declaração da função

const testArrow = (txt: string): string => {
  return txt;
};
// console.log(testArrow('teste'))

const sum3 = (n: number[]): number => {
  let initValue = 0;
  n.map((nItem) => (initValue += nItem));
  return initValue;
};
// console.log(sum3([3,5,1]))
