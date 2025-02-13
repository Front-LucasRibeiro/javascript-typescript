interface Person {
  name: string;
  age: number;
}

type Loggable = {
  log: (msg: string) => void;
};

type PersonLoggable = Person & Loggable; // interseção de tipos 

const person: PersonLoggable = {
  name: 'Joao',
  age: 25,
  log: (msg) => console.log(msg),
};