function hitungKata (kata) {
    let hasilObj = {}  //objek
    let splitKata = kata.split(' ')

    for (let word of splitKata) {
        word = word.toLowerCase()

        if(hasilObj[word]){   //kl hasilObj ada 1 maka dia true => hasil objek akan ditambahkan 1
            hasilObj[word] += 1
        } else {
            hasilObj[word] = 1
        }
    }

    let maxKey
    let max = 0

    for (const key in hasilObj) {  //key => berisi properties dr hasilObj
        if(hasilObj[key] > max) {
            max = hasilObj[key]
            maxKey = key
        }
    }

    return maxKey + ' ' + hasilObj[maxKey]
}