var decodeBits = function (bits){
var code = [];
var arr = [];
var times;
var extra;
arr.push(...bits);
while (arr[0] == '0') {
    arr.splice(0, 1);
}
while (arr[arr.length - 1] == '0') {
    arr.pop();
}
while (arr[0] == '0') {
    arr.splice(0, 1);
}
while (arr[arr.length - 1] == '0') {
    arr.pop();
}
var ones = bits.match(/1{2,}/)
if (ones != null) {
    var time1 = ones[0].length;
}
var zeros = arr.toString().match(/[0]+/g)
if (zeros == null && ones != null) {
    for (x = 0; x < arr.length / time1; x++) {
        code.push(arr[0]);
        arr.splice(0, time1);
    }
    var encode = code.join().replace(/,/g, '');
    return encode.replace(/111/g, '-').replace(/0000000/g, '&').replace(/000/g, ' ').replace(/0/g, '').replace(/1/g, '.');
}
var timeUnit = bits.match(/[0]+/g);
if (timeUnit == null) {
    times = bits.length;
}
else if (timeUnit[0].length < 3) {
    times = timeUnit[0].length / 1;
}
else if (timeUnit[0].length == 3) {
    times = 1;
}
else if (timeUnit[0].length >= 3 && timeUnit[0].length < 6) {
    times = timeUnit[0].length;
}
else if (timeUnit[0].length == 7) {
    times = 1;
}
else if (timeUnit[0].length > 7) {
    times = timeUnit[0].length / 3;
}
for (x = 0; x < bits.length / times; x++) {
    code.push(arr[0]);
    arr.splice(0, times);
}
var encode = code.join().replace(/,/g, '');
return encode.replace(/111/g, '-').replace(/0000000/g, '&').replace(/000/g, ' ').replace(/0/g, '').replace(/1/g, '.');
}
var decodeMorse = function (morseCode) {
    var Morse = {
        '-.-.--': '!'
        , '.-..-.': '"'
        , '...-..-': '$'
        , '.-...': '&'
        , '.----.': '\''
        , '-.--.': '('
        , '-.--.-': ')'
        , '.-.-.': '+'
        , '--..--': ','
        , '-....-': '-'
        , '.-.-.-': '.'
        , '-..-.': '/'
        , '-----': '0'
        , '.----': '1'
        , '..---': '2'
        , '...--': '3'
        , '....-': '4'
        , '.....': '5'
        , '-....': '6'
        , '--...': '7'
        , '---..': '8'
        , '----.': '9'
        , '---...': ':'
        , '-.-.-.': ';'
        , '-...-': '='
        , '..--..': '?'
        , '.--.-.': '@'
        , '.-': 'A'
        , '-...': 'B'
        , '-.-.': 'C'
        , '-..': 'D'
        , '.': 'E'
        , '..-.': 'F'
        , '--.': 'G'
        , '....': 'H'
        , '..': 'I'
        , '.---': 'J'
        , '-.-': 'K'
        , '.-..': 'L'
        , '--': 'M'
        , '-.': 'N'
        , '---': 'O'
        , '.--.': 'P'
        , '--.-': 'Q'
        , '.-.': 'R'
        , '...': 'S'
        , '-': 'T'
        , '..-': 'U'
        , '...-': 'V'
        , '.--': 'W'
        , '-..-': 'X'
        , '-.--': 'Y'
        , '--..': 'Z'
        , '..--.-': '_'
        , '...---...': 'SOS'
    }
    var deCode = []
    var add = 0;
    var ans = '.';
    var spacer = [];
    var spacer = morseCode.match(/^(\s)+/);
    if (spacer == null) {
        spacer = '.';
    }
    if (spacer[0] == '   ') {
        morseCode = morseCode.slice(3);
    }
    else if (spacer[0] == '      ') {
        morseCode = morseCode.slice(6);
    }
    else if (spacer[0] == '         ') {
        morseCode = morseCode.slice(9);
    }
    else if (morseCode == '...---...') {
        return 'SOS';
    }
    while (morseCode.length > 0) {
        var start = morseCode.match(/(^\s{1,3}|^&)/g);
        if (start == ' ') {
            morseCode = morseCode.slice(1);
        }
        else if (start == '  ') {
            morseCode = morseCode.slice(2);
        }
        else if (start == '   ') {
            deCode.push(' ');
            morseCode = morseCode.slice(3);
        }
        else if (start == '&') {
            deCode.push(' ');
            morseCode = morseCode.slice(1);
        }
        else {
            var code = morseCode.match(/([^\s|&]+)/g);
            var Code = code[0];
            var len = Code.length;
            var ans = Morse[Code];
            deCode.push(ans);
            morseCode = morseCode.slice(len);
        }
    }
    var deCoded = deCode.toString()
    var Ans = deCoded.replace(/,/g, '')
    return Ans;
}
decodeMorse(decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011'))
    //'I'