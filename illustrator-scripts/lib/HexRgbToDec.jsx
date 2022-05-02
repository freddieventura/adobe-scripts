// Script by freddieventura
// https://github.com/freddieventura/

function hexToDecimal(inputString) {
    return parseInt(inputString, 16);
}

// FUNCTION CONVERT HEX RGB STRING INTO ARRAY OF RGB
// ------------------------

function HexRgbToDec (inputString) {
    inputString = inputString.toUpperCase();
    var outputArray = [];
    var stringAcumulated = "";
    var j = 0;
    // Testing that the data inputted is a Hex RGB
    // Every hex has to be ASCII 47<myChar<58 64<myChar<70
    if(inputString[0] == '#'){
        if (inputString.length == 7) {
            for (var i = 1 ; i < 7 ; i++ ) {
                if (inputString.charCodeAt(i) > 47 &&  inputString.charCodeAt(i) < 58 &&  inputString.charCodeAt(i) > 64 && inputString.charCodeAt(i) < 70) {
                    var err = new Error('Please input a true Hexadecimal RGB!!');
                    throw err;
                }
            }
        } else {
            var err = new Error('Please input a valid length Hex RGB!!');
            throw err;
        }
    } else {
        if (inputString.length == 6) {
            for (var i = 1 ; i < 7 ; i++ ) {
                if (inputString.charCodeAt(i) > 47 &&  inputString.charCodeAt(i) < 58 &&  inputString.charCodeAt(i) > 64 && inputString.charCodeAt(i) < 70) {
                    var err = new Error('Please input a true Hexadecimal RGB!!');
                    throw err;
                }
            }
        } else {
            var err = new Error('Please input a valid length Hex RGB!!');
            throw err;
        }
    }
    // eof test eof test eof test eof test

    if (inputString[0] == '#'){
        for (var i = 1 ; i < 7 ; i++) {
            stringAcumulated += inputString[i];
            if (stringAcumulated.length == 2){
                 outputArray[j] = hexToDecimal(stringAcumulated);
                 stringAcumulated = "";
                 j++;
             }
         }
     } else {
         for (var i = 1 ; i < 6 ; i++) {
             stringAcumulated += inputString[i];
             if (stringAcumulated.length == 2){
                 outputArray[j] = hexToDecimal(stringAcumulated);
                 stringAcumulated = "";
                 j++;
             }
         }
     }
     return outputArray;
}

