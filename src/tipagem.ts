export const types = () => {

  let numberList: number[] = [20, 30, 40]; // tipagem na atribuição
  let listNumber: Array<number>=[10,20,30]
  let listNumber2: Array<number | string>=[10,20,30, 'Lucas'] // aceitando number e string
  
  // array somente leitura 
  let numerosRO: ReadonlyArray<number>=[1,2,3]
  
  // tuplas - tipo especificos para posiçoes especificas
  // os itens podem ser adicionados de acordo com a ordem informada de tipo
  // neste caso só temos 2 index
  let coisas: [string, number] = ['corda', 10]
  

  // object 
  let dados = {
    nome: 'Lucas',
    idade: 31,
    status: 'ativo',
    ola: () => {
      console.log('oi')
    },
    info: (txt: string) => console.log(txt)
  }
  

  // null , undefined,  unknown - nulo, indefinido e desconhecido
  let nome: string | null;
  nome = null;

  // unknown - pode receber qualquer valor, só que não pode ser atribuido outros tipos, apenas o unknow ou any


  

} 
