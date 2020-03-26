let arr = [1, 2, 3, 4, 5];
// let arr = [5, 3, 4, 2, 1];
// let row =[]

// const forEachRep = (array, cb) => {
//   for (i = 0; i < array.length; i++) {
//     cb(array[i], i, array);
//     //   row.push(arr[i])
//     //   row.push(i)
//     //   row.push(arr)
//     //   cb()
//     //   row = []
//   }
// };

// // forEachRep(arr, () => {console.log(...row)});
// forEachRep(arr, (item, index, arr) => {
//   console.log(item, index, arr);
// });

// for (let item of arr) {
//     console.log(item)
// } // lbh singkat dr for biasa cuman flexsibilitasnya lbh rendah krn cuman bs akses value dlm arr aja

// for (let item of arr) {
//     arr.indexOf(item)
// } //tp kl arr=[1,2,3,1] ntar hasilnya index untuk yg terakhir salah

// let saya = {
//     nama: 'Theo',
//     pekerjaan: 'Pengajar',
//     status: 'Sehat'
// }

// for (let key in saya) {
//     console.log(key, saya[key]) //key berisi string nama properti
// } // for in => yg didapetin itu si propertinya atau keynya. bisa digunain untuk akses objek

// setTimeout(()=>{
//     console.log('Hello World')
// }, 3000) //enter, setelah 3 detik baru keluar

// setInterval(()=>{
//     console.log('Halo Dunia')
// },1000) //entar, setiap i dtk ngeluarin hasil

