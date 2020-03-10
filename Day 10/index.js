// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]
// let arr3 = [...arr1]

// arr1.push('hello')

// console.log([...arr1, ...arr2]) //sama ky console.log(1, 2, 3)
// console.log(arr3)

// let mobil1 = {
//     tahun: 2000,
//     merek: 'Toyota',
//     harga: 10000
// }

// // let mobil2 = {...mobil1, jumlahPintu: 4}
// let mobil2 = {...mobil1, merek: 'Mercedes'}
// console.log(mobil2)

class Orang {
    constructor(nama, pekerjaan, umur, pic) {
        this.nama = nama
        this.pekerjaan = pekerjaan
        this.umur = umur
        this.pic = pic
    }
}
let dataOrang = [
    new Orang('No-Face', 'Spirit', 100, 'https://toppng.com/uploads/preview/no-face-png-11553956753a6hqkffkzz.png'),
    new Orang('Haku', 'Main Character', 12, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKRyNGDT21AB12cuULwakiyhSm9pVfiYNG4n-PIVtXiTSJPUIk'),
    new Orang('Chihiro', 'Main Character', 10, 'https://vignette.wikia.nocookie.net/p__/images/e/e3/X39xc4.png/revision/latest/top-crop/width/360/height/450?cb=20160227173405&path-prefix=protagonist')
]

let arrData = dataOrang.forEach(({ nama, pekerjaan, umur, pic },index, arrData) => {
    arrData[index] = nama
})

console.log(arrData)