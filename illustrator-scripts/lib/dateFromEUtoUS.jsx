// Script by freddieventura
// https://github.com/freddieventura/
// lastModified on : 21/04/2021

// STRING FUNCTION
// CHANGE DATE FROM EU TO US
// ------------------------
// Dependencies: None
// Valid as input for New Date() object

function dateFromEUtoUS (inputString , separationChar) {
    var outputArray = ['','',''];
    var outputString = '';
    var j = 0;
    if ( separationChar == '/') {
        inputString = inputString.replace(/\//g , '-');
    }
    for (var i = 0; i < inputString.length ; i++) {
        if (inputString[i] == '-'){
            j++;
        } else {
            outputArray[j] += inputString[i];
        }
    }
    outputString = outputArray[1] + '-' + outputArray[0] + '-' + outputArray[2];

    return outputString;
}

// ------------------------
// eof eof eof eof eof eof eof eof eof
