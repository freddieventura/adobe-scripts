// Script by freddieventura
// https://github.com/freddieventura/
// lastModified on : 21/04/2021


// FUNCTION TRUNCATES A YEAR FROM 4 DIGITS TO 2
// ------------------------

function getDateTruncYear(inputDateFullYear) {
    var outputDateTruncYear = '';
    inputDateFullYear = inputDateFullYear.toString();
    for (var i = 0 ; i < 4 ; i ++){
        if (i > 1) {
            outputDateTruncYear += inputDateFullYear[i] ;
        }
    }
    return outputDateTruncYear;
}

// ------------------------
// eof eof eof eof eof eof eof eof eof
