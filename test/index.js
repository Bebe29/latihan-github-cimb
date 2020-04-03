let bangunan = ['Persegi', 'Segitiga Siku Kiri', 'Segitiga Siku Kanan']
// const daftarBangunan = () => {
//     let daftar = ''
//     bangunan.forEach((item,index) => {
//         daftar += `${index + 1}. ${item}\n`
//     })
//     return daftar
// }
// daftarBangunan()
const liatBangunan = () => {
    let jenis = 3
    let ukuran = 5
    let hasil = ''
    if (jenis == bangunan.length-2){ //pilihan 1
        for (i=0;i<ukuran;i++){
            for (j=0; j<ukuran;j++){
                hasil += '*'
            }
            if (i<ukuran-1){
                hasil += '\n'
            } else {
                break
            }
            
        }
    } else if (jenis == bangunan.length - 1){ //pilihan 2
        for (i=0;i<ukuran;i++){
            for (j=0; j<=i;j++){
                hasil += '*'
            }
            if (i<ukuran-1){
                hasil += '\n'
            } else {
                break
            }
            
        }
    } else if (jenis == bangunan.length) { //pilihan 3
        for (i=0;i<ukuran;i++){
            for (k=ukuran-1; k>i;k--){
                hasil += ' '
            }
            for (j=0; j<=i;j++){
                hasil += '*'
            }
            if (i<ukuran-1){
                hasil += '\n'
            } else {
                break
            }
        }
    }
    return hasil
}
console.log(liatBangunan())