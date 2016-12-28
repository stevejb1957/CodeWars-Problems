decodeMorse = function (morseCode) {
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
    if (spacer[0] == '   ') { // if spacer = null
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
        var start = morseCode.match(/(^\s{1,3})/g);
        if (start == ' ') {
            morseCode = morseCode.slice(1);
        }
        else if (start == '  ') {
            morseCode = morseCode.slice(2);
        }
        else if (start == "   ") {
            deCode.push(" "); // ????
            morseCode = morseCode.slice(3);
        }
        else {
            var code = morseCode.match(/([^\s]+)/g);
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
decodeMorse('.-.-.-  ')
    //'HEY JUDE'