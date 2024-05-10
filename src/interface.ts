interface ICurso {
  titulo: string;
  alunos: number;
  iniciarCurso(teste: string): string;
}

let curso2: ICurso;

function iniciarCurso(t: string): string {
  return t;
}

curso2 = {
  titulo: 'Typescript',
  alunos: 50,
  iniciarCurso
};

curso2.iniciarCurso('olá')