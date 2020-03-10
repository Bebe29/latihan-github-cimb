// 1. Function utk hapus huruf vocal
// 2. Function utk sort array string (A-Z dan Z-A)
// 3. Function utk sort array integer (0-9 dan 9-0)
// 4. Function display angka terbesar dalam array. (Gak boleh pake Math.max())
// 5. Function ngefilter string (hanya bisa integer). (Output array isinya hanya bisa number)
// 6. Function untuk hapus huruf awal dan akhir saja 

// 1
    function hapusVocal(text){
        textbaru = text.replace(/[a,i,u,e,o]/gi, '')
        return console.log(textbaru)
    }
    hapusVocal('The quick brown fox jumps over the lazy dog')


// 2
    function urutinHuruf(arrText){
        return console.log(arrText.sort()) + console.log(arrText.reverse())
    }
    urutinHuruf(['f', 'x', 'a', 'e', 'A'])


// 3
    function urutinAngka(arrAngka){ //hrsnya ada return a-b
        return console.log(arrAngka.sort()) + console.log(arrAngka.reverse())
    }
    urutinAngka([2, 0, 5, 4, 7, 9, 1, 8, 3, 6])
    


// 4
    function angkaTerbesar(arrAngka) {
        let max = 0
        for (i = 0; i < arrAngka.length; i++) {
            if (max < arrAngka[i]) {
                max = arrAngka[i]
            }
        }
        return  console.log(max)
    }
    angkaTerbesar([22, 10, 60, 1, 25, 100, 5, 15])


// 5
    function filterString(input) {
        let arrOutput = []
        for (i = 0; i < input.length; i++) {
            if (typeof input[i] == "number") {
                arrOutput.push(input[i])
            }
        }
        return console.log(arrOutput)
    }
    filterString(['20', 5, 'fox', 3, 13])


// 6
    function removeChar(text) {
        let arrText = text.replace(/[.,,,;,!,?,/,',",:,-,+]/gi,'').split(' ')
        let textOutput = ''
        for (i = 0; i < arrText.length; i++) {
            textOutput += arrText[i].slice(1, arrText[i].length - 1) + ' '
        }
        return console.log(textOutput)
    }
    removeChar('The quick brown fox, jumps over the lazy dog.')