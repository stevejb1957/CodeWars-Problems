var decodeBitsAdvanced = function (bits) {
    var code = [];
    var arr = [];
    var count = []
    var toArr = []
    var toArrSplit = []
    var Count = []
    var times;
    var extra;
    arr.push(...bits);
    while (arr[0] == '0') {
        arr.splice(0, 1);
    }
    while (arr[arr.length - 1] == '0') {
        arr.pop();
    }
    var ones = arr.toString().split('0')
    for (x = 0; x < ones.length; x++) {
        count.push((ones[x].match(/1/g) || []).length)
    }
    for (x = 0; x < count.length; x++) {
        if (count[x] != '0') {
            count.splice(x + 1, 0, parseInt('0'))
        }
    }
    var char = count.toString().replace(/,/g, '').split(/0{4,7}/g)
    var toArr = char[0].split('')
    for (x = 0; x < toArr.length; x++) {
        toArrSplit.push(parseInt(toArr[x]))
    }
    var analyse = toArrSplit.reduce((a, b) => a + b, 0);
    var elementSize = analyse / toArr.length;
    for (x = 0; x < count.length; x++) {
        if (count[x] == elementSize || count[x] == 0) {
            Count.push(count[x])
        }
        else if (count[x] > elementSize && count[x] < 4) {
            Count.push(1)
        }
        else {
            Count.push(3)
        }
    }
    
    return bits.replace('111', '-').replace('000', ' ').replace('1', '.').replace('0', '');
}
var decodeMorse = function (morseCode) {
    /*
    return morseCode.replace('.', MORSE_CODE['.']).replace('-', MORSE_CODE['-']).replace(' ', '');
    */
}
decodeMorse(decodeBitsAdvanced('0000000011011010011100000110000001111110100111110011111100000000000111011111111011111011111000000101100011111100000111110011101100000100000')) // 'HEY JUDE'