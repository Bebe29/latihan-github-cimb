const mumble = word => {
    // let splitWord = word.split('')
    // let hasil= splitWord[0].toUpperCase()
    // let tambah = ''
    // for (i=1;i<word.length;i++){
    //     for (j=1;j<i;j++){
    //         tambah += splitWord[j]
    //     }
    //     hasil += '-' + splitWord[i].toUpperCase() + tambah
    // }
    // return hasil
    var arr = word.split('')
    var newArr = []
    
    for ( i =0 ; i<word.length;i++){
        var upCase = arr[i].toUpperCase()
        newArr.push(upCase)
        for (k=0;k<i;k++){
            newArr.push(arr[i].toLowerCase())
        }
        if (i== word.length - 1){
            break
        }
        newArr.push('-')
    }
    return newArr.join('')
}
console.log(mumble('hello'))