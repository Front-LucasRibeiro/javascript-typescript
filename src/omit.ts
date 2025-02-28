// Constrói um tipo escolhendo todas as propriedades de Typee então removendo Keys(literal de string ou união de literais de string). O oposto de Pick

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}
 
type TodoPreview = Omit<Todo, "description">;
 
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};