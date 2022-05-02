// Script by freddieventura
// https://github.com/freddieventura/
// lastModified on : 21/04/2021

#include "./HexRgbToDec.jsx"

// INSERTING A COMPOSITE TEXT FRAME STYLE AA
// ------------------------
//
// INPUT PARAMETERS
// startY[int],startX[int],frameWidth[int],frameHeight[int],textInput[string],textColor[HexColor]
// textSize[int],textFont[string],borderColor[HexColor],frameColor[HexColor]

/* EXAMPLE COPY PASTE IT
createCompositeTextFrameAAInsert({
    startY: 550,
    startX: 50,
    frameWidth: 330,
    frameHeight: 250,
    textInput: "Thiisisjustalineintendedtobeonlyalineandnomorestilliputsomemorestaffanditdoe",
    textColor: "#0E2E40",
    textSize: 30,
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

function createCompositeTextFrameAAInsert (args) {
    createCompositeTextFrameAA(args.startY , args.startX , args.frameWidth, args.frameHeight, args.textInput, args.textColor, args.textSize, args.textFont, args.borderColor, args.frameColor);
}

function createCompositeTextFrameAA ( startY , startX , frameWidth, frameHeight, textInput, textColor, textSize, textFont, borderColor, frameColor) {

	// TEXT
	var rectRef = app.activeDocument.pathItems.rectangle(startY - 25, startX + 25, frameWidth + 40, frameHeight - 40);
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


