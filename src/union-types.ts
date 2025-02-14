type Primitive = string | number | boolean;

type ImageSize = 8 | 16 | 32 | 64 | 128;

interface Image {
  name: string;
  size: ImageSize;
}

export default function Union(value: Primitive) {
  let valueFormatted = "";
  // com essa verificação agora é possivel ver todos os metodos para o tipo string
  if (typeof value === "string") {
    valueFormatted = value.padStart(7, "---");
    console.log(valueFormatted);
  }

  const image: Image = {
    name: "teste",
    size: 64, // precisa ser um dos valores do union types ctrl+espaço para ver os valores
  };
}
