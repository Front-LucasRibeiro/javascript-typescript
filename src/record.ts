// Ele é útil em várias situações, como estruturação de objetos com chaves conhecidas, 
// tipagem de dicionários e configuração de valores estáticos.

// O Record<K, T> é uma forma de estruturar objetos de maneira mais tipada e segura no TypeScript.
// Ele garante que o objeto terá apenas as chaves especificadas no tipo K e que os valores associados a essas chaves serão do tipo T.

const scores: Record<string, number> = {
  Lucas: 32,
  João: 22,
};

// limitando tipos de chave em string que precisam ser usados
type Profile = "admin" | "user" | "guest";

const user: Record<Profile, number> = {
  admin: 15,
  user: 10,
  guest: 14,
};

interface User {
  name: string
  email: string
}

const users: Record<number, User> = {
  1: {name: "Lucas", email: "lksribeiro2014@gmail.com"},
  2: {name: "João", email: "joao@gmail.com"}
}

const userScores: Record<number, number> = {
  1: 100,
  2: 95,
  3: 87,
};

type Theme = 'light' | 'dark';

const colors: Record<Theme, string> = {
  light: '#ffffff',
  dark: '#000000',
};

