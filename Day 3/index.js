//let input = 'Hello World'

//while (input){
//    console.log('loop')
//}

//for (let i = 0; i < 20; i++){
//    console.log(i)
//}

//let counter = 0
//while (counter < 5){
//    console.log('hallo')
//    counter++
//}

// let fizzbuzzCounter = 0
// let len = 50

// for (i = 1; i<= len; i++){
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log('FizzBuzz')
//         fizzbuzzCounter += 1
//         if (fizzbuzzCounter == 2){
//             break
//         }
//     } else if (i%3 == 0){
//         console.log('Fizz')
//     } else if (i%5 == 0){
//         console.log('Buzz')
//     } else {
//         console.log(i)
//     }
// }

// for(let i = 1; i <= 5; i++){
//     let result = i
//     for(let j = 1; j <= 5; j++){
//         result =+ j
//     }
//     console.log(result)
// }

// var hasil = ''
// for (i = 1; i<=4; i++){
//     for (j = 1; j <=4 ; j++){
//         hasil += '*'
//     }
//     hasil += '\n'
// }
// console.log(hasil)

// for (i = 1; i<=4; i++){
//     var hasil = ''
//     for (j = 0; j < i; j++){
//         hasil += '*'
//     }
//     console.log(hasil)
// }

// var hasil = ''
// for (i=0; i< 5; i++){
//     hasil += '*'
//     for (j=0; j<5; j++){
//         if (j==i){
//             break
//         }
//         hasil +='*'
//     }
//     hasil += '\n'
// }
// console.log(hasil)

var hasil2 = ''
for (i=0; i< 5; i++){
    for (j=0; j<5; j++){
        if (j==i){
            hasil2 += ' '
        } else {
            hasil2 +='*'
        }      
    }
    hasil2 += '\n'
}
console.log(hasil2)