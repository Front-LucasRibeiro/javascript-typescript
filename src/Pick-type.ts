// Constrói um tipo escolhendo o conjunto de propriedades Keys(literal de string ou união de literais de string) de Type

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
 
type TodoPreview = Pick<Todo, "title" | "completed">;
 
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};