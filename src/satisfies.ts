// O satisfies operador informa se um dado tipo satisfaz uma condição específica – e fornece essa informação antes de executar seu código.
// satisfiesgarante que todas as variáveis ​​se ajustem à definição e tenham todas as propriedades necessárias de um tipo ou interface específica.

type personName = "John" | "Jack" | "Justin";

type personInfo = personName | otherDetails;

type otherDetails = {
  id: number;
  age: number;
};

type Person = {
  myInfo: personInfo;
  myOtherInfo: personInfo;
};

const applicant = {
  myInfo: "John",
  myOtherInfo: { id: 123, age: 22 },
} satisfies Person;

// sem o satisfies tomariamos o erro Property 'toUpperCase' does not exist on type 'personInfo'.
// agora não precisamos pré validar:
// O operador satisfies determina que a myInfovariável é uma string e não um objeto. Isso ocorre porque, antes de executar o código, ele verifica todos os valores do Persontipo. Esse operador garante que atribuamos qualquer valor que satisfaça o Persontipo à applicantvariável.

applicant.myInfo.toUpperCase();



// restrição de nome de propriedade 
type Keys = "personID" | "personName" | "personEmail" | "personAge" | "personPhone";

const person2 = {
  personID: 12345,
  personName: "Jacky",
  personEmail: "jacky@testing.com",
  personAge: 22,
} satisfies Partial<Record<Keys, string | number>>;

person2.personName.toUpperCase();
person2.personAge.toFixed();