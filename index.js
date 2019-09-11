
balikKata = (str) => {
    if(str.toLowerCase() == 'sop'){
        return 'tumpah'
    }else{
        return str.split('').reverse().join('')
    }
}

// console.log(balikKata('hello'))

tambahKurang = (arr) => {
    let operator = 'tambah'
    let sum = 0

    for(var i = 0; i < arr.length; i++){
        if(operator == 'tambah'){
            sum += arr[i]
            operator = 'kurang'
        }else if(operator == 'kurang'){
            sum -= arr[i]
            operator = 'tambah'
        }
    }

    return sum
}

// console.log(tambahKurang([1,2,3,4,5]))

fibo = (len) => {
    let arr = [0,1]
    for(let i = 2; i < len; i++){
        arr[i] = arr[i-2] + arr[i-1]
    }
    return arr
}

// console.log(fibo(8))

removeDup = (arr) => {
    let result = []
    for(let i = 0; i < arr.length; i++){
        if(!result.includes(arr[i])){
            result.push(arr[i])
        }
    }
    return result
}



removeDup2 = (arr) => {
    let result = [arr[0]]
    for(let i = 0; i < arr.length; i++){        // Loop array inputan
        for(let j = 0; j < result.length; j++){   // Loop pengecekan
            if(arr[i] == result[j]){
                break
            }
            if(j == result.length-1){
                result.push(arr[i])
            }
        }
    }

    return result
}


// console.log(removeDup2([10,10,20,30,10,20,45]))

mumble = (string) => {
    let splitString = string.split('')
    let result = []
    for(var i = 0; i < splitString.length; i++){   // Loop utk dapetin huruf inputan
        result.push(splitString[i].toUpperCase())
        for(var j = 0; j < i; j++){                 // Loop utk tambahin huruf jumlahnya sesuai index
            result.push(splitString[i].toLowerCase())
        }
        result.push('-')
    }
    result.pop()
    return result.join('')
}

console.log(mumble('abcde'))