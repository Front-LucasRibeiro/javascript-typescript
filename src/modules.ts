// O TypeScript 4.5 também permite que importações individuais sejam prefixadas com typepara indicar que a referência importada é um tipo:

// @filename: app.ts
import { createCatName, type Cat, type Dog } from "./animal.js";

export type Animals = Cat | Dog;
const name = createCatName();


// Sintaxe do módulo ES com comportamento CommonJS
// O TypeScript tem a sintaxe ES Module que se correlaciona diretamente com um CommonJS e AMD require. 
// Importações usando o ES Module são, na maioria dos casos, as mesmas requiredaqueles ambientes, 
// mas essa sintaxe garante que você tenha uma correspondência de 1 para 1 no seu arquivo TypeScript com a saída CommonJS:

import fs = require("fs");
const code = fs.readFileSync("hello.ts", "utf8");