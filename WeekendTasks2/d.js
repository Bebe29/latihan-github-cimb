var letters = "abcdefghijklmnopqrstuvwxyz";

const caesarCipher = (word, num) => {
  // Buat sebuah function yang menerima sebuah string S dan number N ( N >= 0 )
  // Output functionnya adalah sebuah string dengan setiap huruf
  // dari S bergeser sebanyak N posisi dalam urutan alphabet

  // Input: 'abc', 1
  // Output: 'bcd'

  // Input: 'abc', 28
  // Output: 'cde'

  let arrLetters = letters.split("");
  let newWord = "";
  let position = 0;

  for (let i = 0; i < word.length; i++) {
    position = arrLetters.indexOf(word.charAt(i)) + num;
    while (position > arrLetters.length - 1) {
      position -= arrLetters.length;
    }
    newWord += arrLetters[position];
  }
  return newWord;
};
// console.log(caesarCipher("abc", 28));
console.log(caesarCipher("xyz", 28));

const plusMinus = numArr => {
  // Buat sebuah function yang menerima sebuah array of numbers
  // Output functionnya adalah hasil dari setiap angka dari
  // array ditambah atau dikurang dengan index berikutnya secara bergantian.
  // Maaf penjelasannya gak jelas hehe

  // Input: [1,2,3,4]
  // Output: 1 + 2 - 3 + 4 = 4

  // Input: [1, 1, 1, 1, 1]
  // Output: 1 + 1 - 1 + 1 - 1 = 1

  let textSum = "";
  let sum = 0;
  numArr.forEach((element, index) => {
    if (index == 0) {
      textSum += element;
      sum += element;
    } else if (index % 2 !== 0) {
      textSum += ` + ${element}`;
      sum += element;
    } else {
      textSum += ` - ${element}`;
      sum -= element;
    }
  });
  return textSum + " = " + sum;
};
console.log(plusMinus([1, 1, 1, 1, 1]));
// console.log(plusMinus([2, 5, 6, -4, 20, 3, -1]));

const isPalindrome = string => {
  // Buat sebuah function yang menerima sebuah string
  // Function ini akan mengecek apakah string ini sebuah palindrome

  // Sebuah palindrome adalah sebuah kata atau kalimat yang jika dibalik,
  // akan memiliki urutan huruf yang sama dengan kata atau kalimat aslinya

  // Return true jika kata atau kalimat tersebut sebuah palindrome
  // return false sebaliknya

  // Function harus case insensitive

  // Input: 'madam'
  // Output: true

  // Input: 'Racecar'
  // Output: true

  // Input: '123321'
  // Output: true

  // Input: 'NuRsES ruN'
  // Output: true

  // Input: 'hehe kocak'
  // Output: false

  let arrString = string.split(" ").join("");
  let count = 0;
  for (let i = 0; i < arrString.length; i++) {
    if (
      arrString[i].toLowerCase() ==
      arrString[arrString.length - (i + 1)].toLowerCase()
    ) {
      count += 1;
    }
  }
  if (count > 1) {
    return true;
  }
  return false;
};
console.log(isPalindrome("A man, A plan, A canaL, Panama!"));
// console.log(isPalindrome('quick brown fox'))
