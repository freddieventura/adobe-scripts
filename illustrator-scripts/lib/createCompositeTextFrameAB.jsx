// Script by freddieventura
// https://github.com/freddieventura/
// lastModified on : 25/04/2021

#include "./HexRgbToDec.jsx"

// INSERTING A COMPOSITE TEXT FRAME STYLE AB
// ------------------------
//
// INPUT PARAMETERS
// startY[int],startX[int],frameWidth[int],frameHeight[int],textInput[string],textColor[HexColor]
// textSize[int],textFont[string],borderColor[HexColor],frameColor[HexColor]
//
// Difference with AA
// frameHeight is now noLines;
// textSize/[0-4]|small|medium|large|extraLarge/
// noLines

/* EXAMPLE COPY PASTE IT
createCompositeTextFrameAAInsert({
    startY: 550,
    startX: 50,
    frameWidth: 330,
    noLines: 1,
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

function createCompositeTextFrameABInsert (args) {
	
	if (args.noLines < 1){
		var err = new Error('noLines has to be positive!!');
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

    createCompositeTextFrameAB(args.startY , args.startX , args.frameWidth, args.noLines , args.topMargin, args.leftMargin, args.horizontalPadding, args.verticalPadding, textSizeArrayInsert, args.textInput, args.textColor, args.textFont, args.borderColor, args.frameColor, args.borderWidth, args.horizontalRadius, args.verticalRadius);
}

function createCompositeTextFrameAB ( startY , startX , frameWidth, noLines, topMargin, leftMargin, horizontalPadding, verticalPadding, textSizeArrayInsert, textInput, textColor, textFont, borderColor, frameColor, borderWidth, horizontalRadius, verticalRadius) {

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
//	var rectRef = layerRef.pathItems.roundedRectangle(startY,startX,frameWidth,frameHeight,horizontalRadius ,verticalRadius);
//	var rectRef = layerRef.pathItems.roundedRectangle(startY + borderWidth ,startX - borderWidth,frameWidth + borderWidth ,frameHeight + borderWidth,horizontalRadius ,verticalRadius);
//	var rectRef = layerRef.pathItems.roundedRectangle(startY ,startX ,frameWidth + (borderWidth/2) ,frameHeight + (borderWidth/2),horizontalRadius ,verticalRadius);
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


