export const assertion = () => {
  let value: number;
  let otherValue: unknown;
  
  otherValue = 10;
  
  // fazendo afirmação, estamos afirmando para o typescript que o valor vai ser do tipo number
  value = <number>otherValue;
  
  value = 10;
  
  // console.log(typeof(value))
  // console.log(value)
  
  
  // convertendo um valor 
  let valueString = String(value)
  valueString = value.toString() // outra forma de conversão
  valueString = 'virou string'
  // console.log(valueString)

}