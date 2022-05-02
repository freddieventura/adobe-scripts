// Script by freddieventura
// https://github.com/freddieventura/
// lastModified on : 25/04/2021

#include "./HexRgbToDec.jsx"
#include "./minLinesForTextFixedWidthAA.jsx"

// INSERTING A COMPOSITE TEXT FRAME STYLE AB
// ------------------------
//
// INPUT PARAMETERS
// startY[int],startX[int],frameWidth[int],frameHeight[int],textInput[string],textColor[HexColor]
// textSize[int],textFont[string],borderColor[HexColor],frameColor[HexColor]
//
// Difference with AB
// noLines , if not specified , is been adjusted by, textSize and frameWidth

/* EXAMPLE COPY PASTE IT
createCompositeTextFrameACInsert({
    startY: 550,
    startX: 50,
    frameWidth: 990,
//    noLines: 1,
    topMargin: ,
    leftMargin: ,
    horizontalPadding: ,
    verticalPadding: ,
    textInput: "Thiisisjustalineintendedtobeonlyalineandnomorestilliputsomemorestaffanditdoe",
    textColor: "#0E2E40",
    textSize: "small",
    textFont: "MyriadConceptItalic-SemiboldSemiCondensedItalic",
    borderColor: "#28ABE3",
    frameColor: "#C6E7F7",
    borderWidth: 19,
    horizontalRadius: 20,
    verticalRadius: 20,
});
*/

// ------------------------
// eof eof eof eof eof eof eof eof eof


// ------------------------
// FUNCTION DEFINITION 
// ------------------------
// INSERTING A COMPOSITE TEXT FRAME STYLE AA
// ------------------------

function createCompositeTextFrameACInsert (args) {

    if(!args.startY) {
        var err = new Error('No startY specified!!');
        throw err;
    }
    if(!args.startX) {
        var err = new Error('No startX specified!!');
        throw err;
    }
    if(!args.frameWidth) {
        var err = new Error('No frameWidth specified!!');
        throw err;
    }
    if(!args.topMargin) {
        var err = new Error('No topMargin specified!!');
        throw err;
    }
    if(!args.leftMargin) {
        var err = new Error('No leftMargin specified!!');
        throw err;
    }
    if(!args.horizontalPadding) {
        var err = new Error('No horizontalPadding specified!!');
        throw err;
    }
    if(!args.verticalPadding) {
        var err = new Error('No verticalPadding specified!!');
        throw err;
    }

	var textSizeArrayInsert = "";
	if (args.textSize < 4 && args.textSize >= 0) {
		textSizeArrayInsert = args.textSize;
	} else {
		switch(args.textSize){
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

    if(!args.textInput) {
        var err = new Error('No textInput specified!!');
        throw err;
    }

    if(!args.noLines) {
        var noLines = minLinesForTextFixedWidthAA(args.textSize, args.textInput); 
    }

    if(!args.textColor) {
        var err = new Error('No textColor specified!!');
        throw err;
    }
    if(!args.textFont) {
        var err = new Error('No textFont specified!!');
        throw err;
    }
    if(!args.borderColor) {
        var err = new Error('No borderColor specified!!');
        throw err;
    }
    if(!args.frameColor) {
        var err = new Error('No frameColor specified!!');
        throw err;
    }
    if(!args.borderWidth) {
        var err = new Error('No borderWidth specified!!');
        throw err;
    }
    if(!args.horizontalRadius) {
        var err = new Error('No horizontalRadius specified!!');
        throw err;
    }
    if(!args.verticalRadius) {
        var err = new Error('No verticalRadius specified!!');
        throw err;
    }

    createCompositeTextFrameAC(args.startY , args.startX , args.frameWidth, noLines , args.topMargin, args.leftMargin, args.horizontalPadding, args.verticalPadding, textSizeArrayInsert, args.textInput, args.textColor, args.textFont, args.borderColor, args.frameColor, args.borderWidth, args.horizontalRadius, args.verticalRadius);
}

function createCompositeTextFrameAC ( startY , startX , frameWidth, noLines, topMargin, leftMargin, horizontalPadding, verticalPadding, textSizeArrayInsert, textInput, textColor, textFont, borderColor, frameColor, borderWidth, horizontalRadius, verticalRadius) {


var frameHeightArray = [60, 75, 95, 110];
var frameHeight = (frameHeightArray[textSizeArrayInsert] - verticalPadding) * noLines;

var textSizeArray = [30, 45, 60, 75];
var textSize = textSizeArray[textSizeArrayInsert];

	// TEXT
	var rectRef = app.activeDocument.pathItems.rectangle(startY - topMargin , startX + leftMargin, frameWidth - horizontalPadding, frameHeight);
	var areaTextRef = app.activeDocument.textFrames.areaText(rectRef);
	areaTextRef.name = "text01";
	areaTextRef.layer = "layerText";
	areaTextRef.contents = textInput;
	areaTextRef.selected = true;
	areaTextRef.textRange.characterAttributes.size = textSize;
	areaTextRef.textRange.characterAttributes.textFont = app.textFonts.getByName(textFont);
		// Inserting some color
		var newRGBColor = new RGBColor();
		var insertingRGB = HexRgbToDec(textColor);
		newRGBColor.red = insertingRGB[0];
		newRGBColor.green = insertingRGB[1];
		newRGBColor.blue = insertingRGB[2];
		//
	areaTextRef.textRange.characterAttributes.fillColor = newRGBColor;

	// BORDER
	var doc = app.activeDocument;
	var layerRef = doc.layers.getByName("layerLogos").groupItems.add();
	var rectRef = layerRef.pathItems.roundedRectangle(startY + (borderWidth/4) , startX - (borderWidth/4) ,frameWidth + (borderWidth/2) ,frameHeight + (borderWidth/2),horizontalRadius ,verticalRadius);
	rectRef.name = "text01Border";
	rectRef.opacity = 100;
		// Inserting some color
		var newRGBColor = new RGBColor();
		var insertingRGB = HexRgbToDec(borderColor);
		newRGBColor.red = insertingRGB[0];
		newRGBColor.green = insertingRGB[1];
		newRGBColor.blue = insertingRGB[2];
		//
	rectRef.strokeColor = newRGBColor;
	rectRef.filled = false;
	rectRef.strokeWidth = borderWidth;

	// FRAME BACKGROUND
	var doc = app.activeDocument;
	var layerRef = doc.layers.getByName("layerLogos2").groupItems.add();
	var rectRef = layerRef.pathItems.roundedRectangle(startY,startX,frameWidth,frameHeight, horizontalRadius, verticalRadius);
	rectRef.name = "text01Frame";
	rectRef.opacity = 80;
		// Inserting some color
		var newRGBColor = new RGBColor();
		var insertingRGB = HexRgbToDec(frameColor);
		newRGBColor.red = insertingRGB[0];
		newRGBColor.green = insertingRGB[1];
		newRGBColor.blue = insertingRGB[2];
		//
	rectRef.fillColor = newRGBColor;
	rectRef.filled = true;
}

// ------------------------
// eof eof eof eof eof eof eof eof eof


