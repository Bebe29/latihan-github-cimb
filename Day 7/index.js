// function countChar(text) {
//     let arrText = text.split(' ')
//     let textOutput = ''
//     for (i = 0; i < arrText.length; i++) {
//         textOutput += arrText[i].slice(1, arrText[i].length - 1) + ' '
//     }
//     return console.log(textOutput)
// }
// countChar('Saya suka jeruk karena saya dan jeruk suka jeruk dan saya')

// let obj = {
//     tahun: 2000,
//     nama: 'Doraemon',
//     kontak: {
//         rumah: 'Jl jalanan',
//         telfon: [081234, 084231]
//     }
// }
// function testing(){
//     return {
//         tahun: 2000,
//         nama: 'Doraemon',
//         kontak: {
//             rumah: 'Jl jalanan',
//             telfon: [081234, 084231]
//         }
//     }
// }
// console.log(testing().kontak.telfon.forEach())

// let orang = {
//     nama: 'Darryl',
//     tahunLahir: '2020',
//     asal: 'Bandung'
// }
// let arrKaryawan = []

// function cetakanOrang(nama, tahunLahir, asal) { //cuman bisa satu kalau function
//     return {
//         nama,
//         tahunLahir,
//         asal
//     }
// }
// let a = cetakanOrang('Doraemon', '100', 'Jepang') //kebuat objek baru

// class Person { //penulisan nama class diawalin oleh huruf besar
//     constructor(nama, tahunLahir, asal) {
//         this.nama = nama
//         this.tahunLahir = tahunLahir //yg dikiri propertynya yang kanan dari constructor
//         this.asal = asal
//     }
// }
// class Developer extends Person { //developer turunan dari person
//     constructor(nama, tahunLahir, asal, specialty, pengalaman){
//         super(nama, tahunLahir, asal)
//         this.specialty = specialty
//         this.pengalaman = pengalaman
//     }
// }
// class Product {
//     constructor(name, price, stock){ //constructor itu parameter d function
//         this.name = name
//         this.price = price
//         this.stock = stock
//         this.qty = 0 //field yg ga bs diakses => auto qtynya nol
//     }
// }
// class Clothing extends Product {
//     constructor(name, price, stock, size){
//         super(name, price, stock)
//         this.size = size
//     }
// }
// let a = new Person('Doraemon', '1900', 'Sunda')
// let b = new Person('Darryl', '2012', 'Bandung')
// console.log(b)

//tarifnya 2 jam pertama 2000/jam
// 2 jam berikutnya 500/jam

// function calculateParkir(jam){
//     let totalParkir = 0
//     if (jam - 2 <= 0){
//         totalParkir = jam * 2000
//     } else if (jam - 2 > 0) {
//         totalParkir = (2*2000) + ((jam-2)*500)
//     }
//     return totalParkir
// //cara lain//
// let result = 0
// while (hour > 0){
//     if(hour <= 2){
//         result += 2000
//     } else {
//         result += 500
//     }
//     hour--
// } return result
// }
// console.log(calculateParkir(5))

// let input = 'Jakarta'
// function balik(){
//     return input.split('').reverse().join('')
// }
// console.log(balik())

// let arr = [1,4,5]
// let max = Math.max(...arr) //=>hapus braket
// let min = Math.min(...arr)
// console.log(max-min)
// //cara lain//
// function maxDiff (arr=[]) {
//     arr.sort(function(a,b) { //=> bs d tulis arr.sort((a,b) => a-b) <= arrow function
//         return a - b
//     })
//     return arr[arr.length - 1] - arr[0]
// }
// console.log(maxDiff([5, 19, 3, 7, 12]))

// let arr = [5,7,7,7,8,13]
// function sort(arr){
//     return arr.sort(function (a,b){
//         return a - b
//     })
// }
// function med(arr){
//     sort(arr)
//     if (arr.length % 2 == 0){
//         return median = (arr[(arr.length / 2)-1] + (arr[(arr.length/2 +1 )-1]))/2
//     }
//     return median = arr[Math.floor((arr.length/2))]
// }
// console.log(med(arr))

// let input = 'abcde'
// function sumHuruf(input){
//     let sum = 0
//     let arr = input.split('')
//     for (i=0; i<arr.length; i++){
//         sum += i
//     }
//     return sum
// }
// console.log(sumHuruf(input))

// let input = {
//     tglLahir: new Date (2020, 2, 4) //new Date(2020,1,29)
// }
// let lahir = input.tglLahir.getDate() + '-' + (input.tglLahir.getMonth()+1) + '-' + input.tglLahir.getFullYear()
// console.log(lahir)
// console.log(input.tglLahir)

// let hariIni = new Date()  //(2020, 2, 4)
// let ini = hariIni.getDate() + '-' + (hariIni.getMonth()+1) + '-' + hariIni.getFullYear()
// console.log(ini)
// console.log(hariIni)

// //  if (input.tglLahir < hariIni){
// //      console.log('Udh basi')
// //  } else {
// //      console.log('Boleh di makan')
// //  }
// if (input.tglLahir.getFullYear() < hariIni.getFullYear() || input.tglLahir.getMonth() < hariIni.getMonth() || input.tglLahir.getDate() < hariIni.getDate()){
//     console.log('Udh basi')
// } else {
//     console.log('Boleh di makan')
// }