const tripleTrouble = (one, two, three) => {
  // Buatlah sebuah function yang menerima 3 string
  // dan setiap string memiliki panjang yang sama
  // Input: "aa", "bb", "cc"
  // Output: "abcabc"

  // Input: "ab", "cd", "ef"
  // Output: "acebdf"

  let arrText = [one.split(''), two.split(''), three.split('')];
  let newText = ''
  let isText = 0

  while(isText < one.length){
    arrText.forEach((element) => { 
      newText += element[isText]
    })
    isText++
  }

  return newText;
};
console.log(tripleTrouble("ab", "cd", "ef"))
// console.log(tripleTrouble("aa", "bb", "cc"))
// console.log(tripleTrouble("abc", "def", "ghi"));
// console.log(tripleTrouble("abcd", "efgh", "ijkl"));

const altCaps = string => {
  // Buatlah sebuah function yang menerima sebuah string
  // Outputnya sebuah array yang index pertama adalah semua
  // huruf yg posisinya ganjil menjadi kapital, index kedua
  // semua huruf yg posisinya genap jadi kapital
  // Input: "abcdef"
  // Output: ["AbCdEf", "aBcDeF"]

  let arrString = string.toLowerCase().split('')
  let text1 = ''
  let text2 = ''
  arrString.forEach((huruf, index) => {
    if (index % 2 == 0){
      text1 += huruf.toUpperCase()
      text2 += huruf
    } else {
      text1 += huruf
      text2 += huruf.toUpperCase()
    }
  });
  return [text1,text2]
};
console.log(altCaps("abcdef"))
// console.log(altCaps("Agustus"))
// console.log(altCaps("OKTOBER"))