const rest = () => {

  // parametros foram espalhados, podendo passar quantos parametros quiser 
  function sum(...n: number[]) {
    let initValue = 0;
    n.map((nItem) => initValue += nItem)
    return initValue
  }
  // console.log(sum(10, 5, 6, 8, 9, 45))


  function sum2(...n: number[]) {
    let initValue = 0;
    for(let i of n) initValue+=i
    return initValue
  }
  // console.log(sum2(10, 5, 6, 8, 9, 2))


  
}


export default rest;