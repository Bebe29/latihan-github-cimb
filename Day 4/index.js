//let arr = ['Jeruk','Mangga', 3, true, undefined, null] //state array
//console.log(arr) //nampilin array
// console.log(arr.length) //nampilin panjang array

//let text = 'abcdefghij\n'
//console.log(text.slice(2, 5)) //ambil sebagian string mulai dr index 2 sampai 5 (tp 5 ga ikutan) => hasilnya cde
//console.log(text.trim()) //hilangin space atao spasi

//arr.push('Doraemon') //masukin nilai baru di array tp dia nambah panjang array
//console.log(arr[1]) //untuk manggil nilai dari index array tertentu
//arr[4] = 'Harry Potter'//untuk ubah nilai arrat di index tertentu
//arr[arr.length] = 'Hello' //nambah nilai di index array paling akhir
//console.log(arr)

// let arrNumber = [3,7, 6, 9, 5]
// let total = 0;
// for (i=0; i < arrNumber.length; i++){   //cara lama untuk itung nilai dlm array
//     total += arrNumber[i]
// }
// console.log(total)

//cara menghitung nilai di dlm array
// let arrNumber = [3, 7, 6, 9, 5]
// let result = 0
// arrNumber.forEach(function (val){
//      result += val
// })
// console.log(result)

//for (let i of arrNumber){
 //   console.log(i)
//}

//console.log(arrNumber.reduce((a,b) => a+b))

// let string = 'abcdefghij'
// console.log(string.split('')) // untuk mecah string k dlm satu index array
// console.log(string.split(' ')) //untuk mecah string k dlm satu index array berdasarkan spaci

let arrBaru = ['Text', 'String', 'Tulisan', 'Doraemon']
//let index = arrBaru.indexOf('Tulisan')
//console.log(arrBaru[index]+' berada di index '+index)

console.log(arrBaru.splice(2, 2)) //buang data dr index ke-2 sebanyak 2 data
console.log(arrBaru.splice(-1, 2)) //buang data dr index paling belakang