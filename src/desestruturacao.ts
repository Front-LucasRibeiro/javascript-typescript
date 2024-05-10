export const desestruturacao = () => {

  let list = [10, 20, 30]

  // desestruturando a lista nas variaveis a,b,c 
  let [a, b, c] = list
  console.log(a)

  const objeto = {
    namePessoa: "Lucas Maranho",
    idade: 32
  }

  let { namePessoa, idade } = objeto


  // definindo um valor padrão para desetruturar apenas 1 item
  let [d, e = 0, f = 0] = [1]


  // desestruturando com spread 
  let texto1 = "Lucas"
  let texto = "Lucas Lima Ribeiro Maranho"

  // desestruturando string em array 
  let [...t1] = texto1 // nome com cada caracter separado por virgula
  let [...t] = texto.split(" ") // nome com sobrenomes separados por virgula


  return `
  Desestruturação de dados:
    ${namePessoa}
    ${d}
    ${e}
    ${f}
    ${t1}
    ${t}
  `
}



