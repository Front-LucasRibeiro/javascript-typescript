export const enums = () => {

  enum dias {
    domingo = 0,
    segunda = 1,
    terca = 2,
    quarta = 3,
    quinta = 4
  }
  // dias.domingo

  const d = new Date();
  // pegando o numero do dia referente ao valor do enum
  // console.log(dias[d.getDay()])
  
  enum typeUser{
    admin, // por padrão retorna 0
    user // retorna 1
  }

  enum carro {
    fusca = 0, 
    uno = 5 
  }



}