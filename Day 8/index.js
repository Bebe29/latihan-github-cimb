// const alphaValue = (str) => {
//     //str = str.split('')
//     let alpArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     let result = 0

//     for (let i = 0; i < str.length; i++) {
//         //result += (alpArray.indexOf(str[i])+1)
//         result += (alpArray.indexOf(str.charAt(i)) + 1)
//     }

//     return result
// }

// console.log(alphaValue('abc'))

// const alphaValue = (str) => {
//     let alpArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     let result = 0

//     for (let i = 0; i<str.length; i += 2) {
//         result += (alpArray.indexOf(str.charAt(i))+1)
//     }
//     return result

// }
// console.log(alphaValue('abcde'))

const alphaValue = (str) => {
    let alpArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let result = ''
    let sum = 0

    for (let i = 0; i<str.length; i ++) {
        result += alpArray.indexOf(str.charAt(i))+1 
        sum += (alpArray.indexOf(str.charAt(i))+1)
    }
    return result + '=' + sum

}
console.log(alphaValue('xyz'))

// class Product {
//     constructor(name, price, stock) {
//         this.name = name
//         this.price = price
//         this.stock = stock
//     }
// }
// let arrProd = [
//     new Product('Apel', 10000, 1),
//     new Product('Apple', 5000, 1),
//     new Product('bapau', 7000, 1),
//     new Product('mangga', 20000, 1)
// ]

// //1. search by name => return array yg isinya produk yg ada huruf yg dicari
// const searchProduct = (str) => {
//     return arrProd.filter((value) => value.name.toLowerCase().includes(str.toLowerCase()))
// }

// //2. filter by price => return array yg isinya produk dgn harga itu
// const filterProduct = (min, max) => {
//     return arrProd.filter(value => value.price >= min && value.price <= max)
//     // let arrNew = []
//     // for (let i=0; i<arr.length; i++){
//     //     if (arr[i].price >= prc1 && arr[i].price <= prc2){
//     //         arrNew.push(arr[i])
//     //     }
//     // }
//     // return arrNew
// }

// // console.log(searchProduct('ap'))
// console.log(filterProduct(5000, 8000))

// let a = {
//     nama: 'Doraemon',
//     asal: 'Jepang',
//     kontak: {
//         rumah: 'rumah',
//         kota: 'BSD'
//     }
// }

// let {nama ,asal, kontak: {rumah , kota}} = a  //objek distructering

// //console.log(nama)
// const tampilNama = ({nama ,asal, kontak: {rumah , kota}}) => {
//     return nama
// }
// console.log(tampilNama(a))

// let arr = [-7,5,2,-2,1,-13]
// const calculate = arr => {
//     let neg = 0
//     let pos = 0
//     arr.forEach(element => {
//         if(element >= 0) {
//             pos += element
//         } else {
//             neg += element
//         }
//     })
//     return [pos, neg]
// }

// console.log(calculate(arr))
