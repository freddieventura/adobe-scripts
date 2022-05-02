// Script by freddieventura
// https://github.com/freddieventura/
// lastModified on : 21/04/2021

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
// textSize/[0-4]|small|medium|large|extralarge/
// noLines

/* EXAMPLE COPY PASTE IT
createCompositeTextFrameAAInsert({
    startY: 550,
    startX: 50,
    frameWidth: 330,
    noLines: 1,
    textInput: "Thiisisjustalineintendedtobeonlyalineandnomorestilliputsomemorestaffanditdoe",
    textColor: "#0E2E40",
    textSize: "small",
    textFont: "MyriadConceptItalic-SemiboldSemiCondensedItalic",
    borderColor: "#28ABE3",
    frameColor: "#C6E7F7",
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
			case "extralarge":
				textSizeArrayInsert = 3;
			break;
			default:
				var err = new Error('Could not parse textSize');
				throw err;
				// console.warn('No textSize selected, using a random one');
			break;
		}
	}

    createCompositeTextFrameAB(args.startY , args.startX , args.frameWidth, args.noLines , textSizeArrayInsert, args.textInput, args.textColor, args.textFont, args.borderColor, args.frameColor);
}

function createCompositeTextFrameAB ( startY , startX , frameWidth, noLines, textSizeArrayInsert, textInput, textColor, textFont, borderColor, frameColor) {

// As the box height must include borders the first line has to include a margin either ways
// So the following lines are just space for text
//var frameHeightArray1Line = [55, 39, 52, 76];
var frameHeightArray1Line = [50, 39, 52, 76];
var frameHeightArrayMoreLine = [25, 39, 52, 76];
if(noLines == 1){
	var frameHeight = frameHeightArray1Line[textSizeArrayInsert];
} else {
	var frameHeight = frameHeightArray1Line[textSizeArrayInsert] + frameHeightArrayMoreLine[textSizeArrayInsert] * noLines - 1;
}
var textSizeArray = [30, 45, 60, 75];
var textSize = textSizeArray[textSizeArrayInsert];
// DEBUGGING
$.writeln(noLines);
$.writeln(frameHeight);
$.writeln(textSizeArray);
$.writeln(textSize);
$.writeln("noLines" + noLines);
$.writeln("frameHeight" + frameHeight);
$.writeln("textSizeArray" + textSizeArray);
$.writeln("textSize" + textSize);

	// TEXT
	var rectRef = app.activeDocument.pathItems.rectangle(startY - 12, startX + 20, frameWidth - 30 , frameHeight - 20);
	var areaTextRef = app.activeDocument.textFrames.areaText(rectRef);
	areaTextRef.name = "text01";
	areaTextRef.layer = "layerText";
	// header normaly less than 115 chars
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

/*
	// BORDER
	var doc = app.activeDocument;
	var layerRef = doc.layers.getByName("layerLogos").groupItems.add();
	var rectRef = layerRef.pathItems.roundedRectangle(startY,startX,frameWidth,frameHeight,33,33);
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
	rectRef.strokeWidth = 19;
*/

	// FRAME BACKGROUND
	var layerRef = doc.layers.getByName("layerLogos2").groupItems.add();
	var rectRef = layerRef.pathItems.roundedRectangle(startY,startX,frameWidth,frameHeight);
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


