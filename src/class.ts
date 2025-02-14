class Curso {
  canal: string | null = null;
  curso: string | null = null;

  constructor(canal: string, curso: string) {
    this.canal = canal;
    this.curso = curso;
  }
}

// Exemplo de uso
const meuCurso = new Curso("YouTube", "TypeScript para Iniciantes");
console.log(meuCurso);
