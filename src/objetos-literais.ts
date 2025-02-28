interface ICurso2 {
  titulo: string;
  alunos: number;
}

let curso: ICurso2;

curso = {
  titulo: "Typescript",
  alunos: 50,
};

interface Box<Type> {
  contents: Type;
}

// agora podemos usar o tipo generico que for passado para ter acesso as propriedades do tipo
let box: Box<string>;
