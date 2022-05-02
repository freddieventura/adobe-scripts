// Script by freddieventura
// https://github.com/freddieventura/
// lastModified on : 25/04/2021



// FUNCTION MINIMUM LINES OF TEXT NEEDED FOR FIXED WIDTH
// ------------------------
// This function will return the minimum number of lines 
// that a text dialogue is going to take up providing
// the following assumptions:
//          - Semi-fixed textSizes , as [small, medium, large, extraLarge]
//                                      [40, 45, 60, 75]
//          - frameWidth = 990

function minLinesForTextFixedWidthAA (textSize, textInput) {
    var outputInt = 1;

    // Parsing textSize
	var textSizeArrayInsert = "";
	if (textSize < 4 && textSize >= 0) {
		textSizeArrayInsert = textSize;
	} else {
		switch(textSize){
			case "small":
				textSizeArrayInsert = 0;
			break;
			case "medium":
				textSizeArrayInsert = 1;
			break;
			case "large":
				textSizeArrayInsert = 2;
			break;
			case "extraLarge":
				textSizeArrayInsert = 3;
			break;
			default:
				var err = new Error('Could not parse textSize');
				throw err;
				// console.warn('No textSize selected, using a random one');
			break;
		}
	}
    // The following array is the max No of chars per Line provided the textSize
    maxCharsIn1Line = [76, 52, 39, 32];
    var i = 1;
    while (maxCharsIn1Line[textSizeArrayInsert] * i < textInput.length){
        i++;
    }

    return outputInt = i;
}

// ------------------------
// eof eof eof eof eof eof eof eof eof
