// function namaFuction(param) {    //void => kosong
//     console.log(param)
// }
// namaFuction('Sesuatu')

// function namaFuction(a, b) {     //void => kosong
//     console.log(a - b)
// }
// let a = 3
// let b = 5
// namaFuction(b, a)

// function namaFuction(a, b) {    //return yg berisi nilai sesuatu
//     return a - b
// }
// console.log(namaFuction(1, 2) + 5)

// function namaFuction(a = 5 , b = 3) { //kl parameternya diksh, default parameternya ditimpa
//     // if (b && a) {        //masih bermasalah => untuk atasin bikin default parameter
//     //     let c = a + b
//     //     return c
//     // }
//     let c = a + b
//     return c
// }
// console.log(namaFuction(undefined, 2)) //jgn pake null pake undefined. kl null dianggap parameternya bernilai 0

// let a = function () {       //anonymous

// }

// // exercises 9
// const array = [80,80,50]
// console.log(calculateGrade(array))
// function calculateGrade (makrs){
//     let avg = calculateAverage (makrs)
//     if (avg >= 90 && avg <= 100){
//         return 'A'
//     } else if (avg >= 80 && avg <= 89){
//         return 'B'
//     } else if (avg >= 70 && avg <=79) {
//         return 'C'
//     } else if (avg >= 60 && avg <= 69) {
//         return 'D'
//     } else if (avg >= 0 && avg <=59){
//         return 'F'
//     }
// }
// function calculateAverage(array){
//     let sum = 0
//     for (i=0; i<array.length; i++){
//         sum += array[i]
//     }
//     return sum / array.length
// }

function start () {
    return function () {
        return [1,2,[
            {
                nama: 'Doraemon',
                pekerjaan: 'Manjain orang'
            },
            {
                nama: 'Seto',
                kontak: {
                    rumah: 'BSD',
                    telfon: ['081234','432108']
                }
            }
        ],4,5]
    }
}
console.log(start()()[2][1].kontak.telfon[0])