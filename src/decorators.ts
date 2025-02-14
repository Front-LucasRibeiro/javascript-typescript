// {
//   "compilerOptions": {
//     "experimentalDecorators": true
//   }
// }


function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Chamando ${propertyKey} com argumentos:`, args);
    return originalMethod.apply(this, args);
  };
}

class Calculadora {
  @Log
  somar(a: number, b: number): number {
    return a + b;
  }
}

const calc = new Calculadora();
calc.somar(2, 3); // Saída: Chamando somar com argumentos: [2, 3]
