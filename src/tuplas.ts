// tipos definidos e ordem

export default function Tuplas() {
  let data: [number, string] = [39, "João"];

  let dataList: [number, string][];

  dataList = [
    [22, "João"],
    [32, "Lucas"],
  ];

  dataList.push([55, "teste"]);

  console.log(dataList)
}
