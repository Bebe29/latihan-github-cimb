// let arr = []
// for (i=0; i<5 ; i++){
//     arr.push(parseInt(Math.random() * 10))
// }
// console.log(arr)

// let newArr = arr.map((val,index) => {
//     return val + 1
// })
// console.log(newArr)

// const repMap = (array, cb) => {
//     let result = []
//     for (i=0; i <array.length;i++) {
//         result.push(cb(array[i],i,array))
//     }
//     return result
// }
// console.log(repMap(arr, (val, idx, array) => {
//     return val
// }))

// let newArr = arr.filter((val, idx, array) => { //ngereturn boolean
//     return true
// })
// console.log(newArr)

// const repFilter = (array,cb) => {
//     let result = []
//         for (i=0;i<array.length;i++){
//             if (cb(aray[i], i, array)) {
//                 result.push(array[i])
//             }
//         }
//     return result
// }
// console.log(repFilter(arr, (val, idx, array) => {
//     return val <= array.length
// }))

//find mirip dgn filter => pake boolean. boolean pertama true, functionnya langsung brs
// arr.find(()=>{})

// const digitalRoot = number => {
// //   let arrNumber = number.toString().split("").map(Number);
// //   let result = 0;
// //   arrNumber.forEach(val => {
// //     result += val;
// //   });
// //   do {
// //     let arrResult = result.toString().split("").map(Number);
// //     result = 0;
// //     arrResult.forEach(val => {
// //       result += val;
// //     });
// //   } while (result > 9)
// //   return result;

// while (number > 9) {
//     let splitNum = number.toString().split('').map(Number)
//     // let result = 0
//     // splitNum.forEach(val => {
//     //     result += val
//     // });
//     // number = result
//     number = splitNum.reduce((a,b) => a+b)
// }
// return number
// };
// console.log(digitalRoot(132189));

// const gabunginArr = (arr1, arr2) => {
//     let newArr = arr1
//     newArr.forEach(val1 => {
//         let isCondition = arr2.find((val2)=> val2 !== val1)
//         if (isCondition){
//             newArr.push(0)
//         }
//     });
//     return newArr
// }
// console.log(gabunginArr([1,2,3,4,5,6],[1,5,6,9,13,7]))

let arr1 = [1,2,3,4,5,6]
let arr2 = [1,5,6,9,13,7]

const uniqueArr = (pertama, kedua) => {
    // let arrCheck = []
    // for (i=0;i<pertama.length;i++){
    //     if(!arrCheck.includes(pertama[i])) {
    //         arrCheck.push(pertama[i])
    //     }
    // }
    // for (i=0;i<kedua.length;i++){
    //     if(!arrCheck.includes(kedua[i])) {
    //         arrCheck.push(kedua[i])
    //     }
    // }
    // return arrCheck

    return[...new Set([...arr1, ...arr2])] //gabungin 2 array tp kl valuenya sama dia ga nulis ulang
}
console.log(uniqueArr(arr1,arr2))