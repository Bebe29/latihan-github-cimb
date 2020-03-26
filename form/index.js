// class Product {
//   constructor(id, category, nama, harga, stock) {
//     this.id = id;
//     this.category = category;
//     this.nama = nama;
//     this.harga = harga;
//     this.stock = stock;
//   }
// }

// let productData = [
//   new Product("1583981075685", "Cloth", "H&M", 12000, 10),
//   new Product("1583981090582", "Fruit", "Jeruk", 7000, 10),
//   new Product("1583981081972", "Electronic", "Samsung", 30000, 10)
// ];
// let arrCart = ["1583981090582"]


// let item = productData.find(val => val.id == '1583981081972');
// let isInCart = arrCart.find(val => val == item.id);

// if (!isInCart) {
// //   let idx = arrCart.findIndex(val => val.id == isInCart.id);
// //   if (arrCart[idx].qty >= arrCart[idx].stock) {
// //     alert("Stock sudah habis");
// //   } else {
// //     arrCart[idx].qty++;
// //   }
// arrCart.push("1583981090582");
// } else {
//   let newCartItem = {
//     ...item,
//     qty: 1
//   };
//   arrCart.push(newCartItem);
// }

// console.log(item)
// console.log(isInCart)
// console.log(arrCart)


class Product {
    constructor(id, category, nama, harga, stock) {
        this.id = id
        this.category = category
        this.nama = nama
        this.harga = harga
        this.stock = stock
    }
}

let productData = [
    new Product('1583981075685', 'Cloth', 'H&M', 12000, 10),
    new Product('1583981090582', 'Fruit', 'Jeruk', 7000, 10),
    new Product('1583981081972', 'Electronic', 'Samsung', 30000, 10)
]

// let arrCart = [productData[2]]
let item = productData[2]
let item2 = productData[0]
let arrCart = [{...item,
qty: 5}, {...item2, qty:3}]
let arrCategory = []
productData.forEach(({category}) => {
    arrCategory.push(category)
})
let userPayment

// const selector = (id) => {
//     return document.getElementById(id)
// }

// const addCategory = (cat) => {
//     let isInCategory
//     let item = productData.find((val) => val.category == cat)
//     if (item){
//         isInCategory = arrCategory.find((val) => val == item.category)
//     } else {
//         arrCategory.push(cat)
//     }
//     return console.log(item) + console.log(isInCategory) + console.log(arrCategory)
// }

// const listCategory = () => {
//     let option = ''
//     arrCategory.forEach((item) => {
//         // option += `<option value="${item}">${item}</option>`
//         option += `${item}\n`
//     })
//     return option
//     // selector("dataList").innerHTML = option
// }
// // listCategory()

// addCategory("Food")
// // addCategory("Fruit")
// // console.log(arrCategory)
// // console.log(listCategory())

const successPayment = () => {
    // let arrHasil =[]
    arrCart.forEach(({id,qty}) => {
        let indexItem = productData.findIndex((val) => val.id == id)
        return productData[indexItem].stock -= qty
    })
    // for (i=0;i<arrCart.length;i++){
    //     for (j=0;i<productData.length;j++){
    //         if (arrCart[i].id == productData[j].id){
    //             // return `${arrCart[i].id} ${productData[j].id}`
    //             arrHasil.push(productData[j].stock -= arrCart[i].qty)
    //         }
    //     }
    // }
    // return arrHasil
    // let item = arrCart[0]
    // let isInProduct = productData.forEach((val) => val.id == item.id)
    // // return item
    // return isInProduct
    // if (isInProduct) {
    //     let idx = productData.findIndex((val) => val.id == isInProduct.id)
    //         productData[idx].stock -= arrCart[idx].qty
    // }
}

// console.log(arrCart)
console.log(successPayment())
// console.log(productData[1])