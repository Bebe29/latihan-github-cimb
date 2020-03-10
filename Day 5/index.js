//nama, umur, pekerjaan
// jumlah orgnya ada 5
//tampilkan nama umur pekerjaan setiap orang

// let arrNama = ['Nanda', 'Silvy', 'Bella', 'Virgi', 'Ajeng']
// let arrUmur = [24, 22, 23, 23, 21]
// let arrPekerjaan = ['Mahasiswa', 'Pelajar', 'Mahasiswa', 'Pelajar', 'Pelajar']
// let arrTelepon = [['0811242953'], ['0844912473'], ['0839843248', '0843894234'], ['0837586393'], ['0853526401', '0892375387']]
// let stringPhone = ''

// for (i=0; i<arrNama.length; i++){
//         console.log(`${arrNama[i]} ${arrUmur[i]} ${arrPekerjaan[i]} ${arrTelepon[i]}`)
// }

// for (i=0; i<arrNama.length; i++){
//     stringPhone = ''
//     for (j=0; j<arrTelepon[i].length; j++){
//         stringPhone += `${arrTelepon[i][j]} `
//     }
//     console.log(arrNama[i], arrUmur[i], arrPekerjaan[i], stringPhone)
// }

// let multiArr = [['081234', ['1234', '4321']],['084321', '081111'], ['082222']]
// console.log(multiArr[0][1][0]) //untuk manggil array dlm array => state indexnya lagi untuk manggil

// let arrUtama = [['Nanda', 24, 'Mahasiswa'], ['Silvy', 22, 'Mahasiswa'], ['Bella', 23, 'Mahasiswa']]
// let orang = ''
// for (i=0; i<arrUtama.length; i++){
//     orang = ''
//     for (j=0; j<arrUtama[i].length; j++){
//         orang += `${arrUtama[i][j]} `
//     }
//     console.log(orang)
// }

// //cara membuat objek
// let mobil = {
//     warna: 'Merah',
//     tahun: '2018',
//     merek: 'Honda'
// }

// mobil.tipe = 'Sedan' // nambah key baru d mobil
// mobil.warna = 'Biru' //ganti nilai yg ada di key

// let inputanUser = 'warna' 

// //console.log(mobil.warna) //biasanya objek dipanggil pake .key
// console.log(mobil[inputanUser]) // [] => di isi string

// let karyawan = {
//     nama: 'Seto',
//     umur: 37,
//     pekerjaan: 'Developer',
//     contactDetail: {
//         alamat: 'GOP 9',
//         nomorTelfon: ['081234', '084321']
//     }
// }
// console.log(karyawan.contactDetail.nomorTelfon[1])

let arr = [
    {
        nama: 'Theo',
        umur: 20,
        pekerjaan: 'Pengajar'
    },
    {
        nama: 'Seto',
        umur: 37,
        pekerjaan: 'Developer'
    }
]

for (i=0; i<arr.length; i++){
    console.log(arr[i].nama)
}