
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

// console.log(mumble('abcde'))

let orang = {
    nama: 'saitama',
    pekerjaan: 'superhero',
    contact: {
        nomorTelfon: [0812345678, 087654321],
        address: {
            jalan: 'Jl. Setiabudi',
            kota: 'JKT'
        }
    },
    orangTua: [
        {
            nama: 'Ibunya Saitama',
            pekerjaan: 'Urus Saitama'
        },
        {
            nama: 'Bapaknya Saitama',
            pekerjaan: 'Urus Ibunya Saitama'
        }
    ],
    pukul: () => {
        return 'aduh sakit'
    }
}
// tmangowal@gmail.com
// Subject: Progress 1 FP JC10 JKT
let string = 'Hello Dunia!'
orang.nama = 'doraemon'
console.log(orang)


function coba () {
    function e () {
        return {
            saitama: 'orang',
            dunia: [
                0,
                1,
                2,
                {
                    testing: (param) => {
                        return {
                            [param]: {
                                world: () => {
                                    return 'iseng hehe'
                                }
                            }
                        }
                    }
                }
            ]
        }
    }
    return e
}

function bikinObject (a,b,c) {
    return {
        [a]: 'Ini param 1',
        [b]: 'Ini param 2',
        [c]: 'Ini param 3'
    }
}

// console.log(bikinObject('sakit', 'hati', 'hehe'))
// console.log(coba()().dunia[3].testing('halo').halo.world())
// console.log(coba()())
// console.log('HelloDunia'.replace)
// console.log(orang.pukul)

sumFn = (arr) => {
    let positives = 0
    let negatives = 0

    // for(let i = 0; i < arr.length; i++){
    //     if(arr[i] > 0){
    //         positives += arr[i]
    //     }else if(arr[i] < 0){
    //         negatives += arr[i]
    //     }
    // }

    arr.forEach((val) => {
            if(val > 0){
                positives += val
            }else if(val < 0){
                negatives += val
            }
    })

    return [positives, negatives]
}

console.log(sumFn([1,2,3,-3,-2,-1]))