// Extract<Type, Union>

// Constrói um tipo extraindo de Typetodos os membros da união que são atribuíveis a Union.

type T0 = Extract<"a" | "b" | "c", "a" | "f">;
     
// type T0 = "a" 

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };
 
type T2 = Extract<Shape, { kind: "circle" }>
     
// type T2 = {
//     kind: "circle";
//     radius: number;
// }