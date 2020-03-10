//callback function

// const validator = (arr, cb) =>{
//     let arrResult = []
//     for (let i = 0; i < arr.length; i++) {
//         if (cb(arr[i])) {
//             arrResult[i] = 1
//         } else {
//             arrResult[i] = 0
//         }
//     }
//     return arrResult
// }

// let arrParam = [3,7,4,7,1,2]
// console.log(validator(arrParam, (val) => {
//     if (val % 2 !==0) {
//         return 1
//     } else {
//         return 0
//     }
// }))

const repMap = (arr, cb) => {
  for (i = 0; i < arr.length; i++) {
    arr[i] = cb(arr[i]);
  }
  return arr;
};

let arrParam = [1, 2, 3, 4];

console.log(
  repMap(arrParam, val => {
    return val + 1;
  })
);
