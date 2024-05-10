// static - metodos ou props associados a classe e não a instancia
// tem endereco de memoria fixo
// entao a cada instancia criada sempre tera o mesmo valor
// dados globais


// podemos acessar sem precisar instanciar a classe definindo a classe como abstract
export abstract class Globais {
  public static teste: string = "valor da variavel global"
}

