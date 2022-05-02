// Script by freddieventura
// https://github.com/freddieventura/
// Template for pimlico million posts on instagram
// nidoria-pimlicomillion-002
// It will generate a multipage output, one text per page , as many pages as texts are to 99
// 
// Required Parameters are:
// postDate, companyName, noPages


#include "./lib/HexRgbToDec.jsx"
#include "./lib/getDateTruncYear.jsx"
#include "./lib/dateFromEUtoUS.jsx"
#include "./lib/fitOverflowPlacedItemToArtboard.jsx"
#include "./lib/createCompositeTextFrameAC.jsx"


mainInsert({
    postDate: "26/04/2022",
    textSize: "medium",
// No of pages have to be 10 or less, 
	noPages: 6, 
    text01: "Are you good at baking? You can Win £50 !!",
    text02: "We are looking for five superstar bakers",
    text03: "Are you one of them?",
    text04: "Join our Eid Cake Competition on Saturday 7th May 2022",
    text05: "Register your interest calling Keith on 07554025721",
    text06: "More info in the description",
    backgroundImage1: "eidmubarak-cake-slashio.jpg",
    companyName: "pimlicomillion",
    socialMedia: "instagram",
    companyPath: "/c/nidoria/pimlicomillion/",
    imageLogo1: "pimlicomillion-logo01.pdf",
});

function mainInsert (args) {

    main(args.postDate, args.textSize, args.noPages, args.text01, args.text02, args.text03, args.text04, args.text05, args.text06, args.text07, args.text08, args.text09, args.text10, args.backgroundImage1, args.companyName, args.socialMedia, args.companyPath, args.imageLogo1);
}

function main(postDate, textSize , noPages, text01, text02, text03, text04, text05, text06, text07, text08, text09, text10, backgroundImage1, companyName , socialMedia, companyPath, imageLogo1) {


// ---------------------
// PROCESSING PARAMETERS (NO USER INPUT FROM HERE)

// OPTIONAL PARAMETERS
if(!postDate) {
    var err = new Error('No postDate specified!!');
    throw err;
}
if(!noPages) {
    var err = new Error('No noPages specified!!');
    throw err;
}
if(!text01) text01 = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socii";
if(!text02) text02 = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socii";
if(!text03) text03 = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socii";
if(!text04) text04 = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socii";
if(!text05) text05 = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socii";
if(!text06) text06 = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socii";
if(!text07) text07 = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socii";
if(!text08) text08 = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socii";
if(!text09) text09 = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socii";
if(!text10) text10 = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socii";
if(!backgroundImage1) backgroundImage1 = "error-analog-tv.png";
if(!companyName) {
    var err = new Error('No companyName specified!!');
    throw err;
}
if(!socialMedia) socialMedia= "instagram";
if(!companyPath) companyPath= "/c/nidoria/" + companyName + "/";
if(!imageLogo1) imageLogo1 = "pimlicomillion-logo01.pdf";


var textArray = [text01, text02, text03, text04, text05, text06, text07, text08, text09, text10];

// replacing that / from excel to - of the output
postDate = postDate.replace(/\//g , '-');

// Spliting the Day, Month and Year
var myDate = new Date(dateFromEUtoUS(postDate , '-'));

var myDateDay = myDate.getDate();
var myDateMonth = myDate.getMonth() + 1;
if (myDateMonth < 10) {
	myDateMonth = '0' + myDateMonth.toString();
} else {
	myDateMonth = myDateMonth.toString();
}
var myDateFullYear = myDate.getFullYear();
var myDateTruncYear = getDateTruncYear(myDateFullYear);

var assetsPath = companyPath + "/assets/";
var assetsBgPath = assetsPath + "/backgroundImages/";

var filePath = companyPath + 'content/' + socialMedia + "/" + myDateTruncYear + "/" + myDateMonth + "/";
var postName = companyName + '-' + socialMedia + '-' + postDate;

// ------------------------
// eof eof eof eof eof eof eof eof eof


// ------------------------
// ------------------------
// PAGEN PAGEN PAGEN PAGEN PAGEN
// ------------------------
// ------------------------
for (var i = 0; i < noPages ; i++) {

	if (i < 9) {
		var pageNumber = i+1;
		pageNumber.toString();
		pageNumber = "0" + pageNumber;
	} else {
		var pageNumber = i+1;
	}


// CREATING A NEW DOCUMENT

app.preferences.setBooleanPreference("ShowExternalJSXWarning", false);
var artboardWidth = 1080 ;
var artboardHeight = 1080 ;
var doc = app.documents.add(null, artboardWidth , artboardHeight, 1);
doc.artboards[0].name = "mainArtboard";
// var newFile = new File("/c/files/dotfiles-win/illustrator-scripts/06realspanishnews01.ai");
// var saveOptions = new IllustratorSaveOptions();
// SaveOptions.SAVECHANGES ;
// app.activeDocument.saveAs(newFile , saveOptions);
doc;

// ------------------------
// eof eof eof eof eof eof eof eof eof


// CREATING LAYERS
// ------------------------

newLayer = app.activeDocument.layers.add()
newLayer.name = "layerBg";
newLayer = app.activeDocument.layers.add()
newLayer.name = "layerLogos2";
newLayer = app.activeDocument.layers.add()
newLayer.name = "layerLogos";
newLayer = app.activeDocument.layers.add()
newLayer.name = "layerText";

// ------------------------
// eof eof eof eof eof eof eof eof eof

// INSERTING AN EXTERNAL IMAGE
// ------------------------

var placedItem = doc.layers.getByName("layerLogos").placedItems.add();
placedItem.file = new File(assetsPath + imageLogo1);
placedItem.name = "imageLogo1";
placedItem.left = 300;
placedItem.top = artboardHeight - 15;
fitOverflowPlacedItemToArtboard("imageLogo1" , "mainArtboard");
placedItem.width = placedItem.width * 0.20;
placedItem.height = placedItem.height * 0.20;

// ------------------------
// eof eof eof eof eof eof eof eof eof

// INSERTING AN EXTERNAL IMAGE
// ------------------------

var placedItem = doc.layers.getByName("layerBg").placedItems.add();
placedItem.file = new File(assetsBgPath + backgroundImage1);
placedItem.name = "backgroundImage1";
placedItem.left = 0;
placedItem.top = artboardHeight;
fitOverflowPlacedItemToArtboard("backgroundImage1" , "mainArtboard");

// ------------------------
// eof eof eof eof eof eof eof eof eof


createCompositeTextFrameACInsert({
    startY: 550,
    startX: 50,
    frameWidth: 990,
    topMargin: 10,
    leftMargin: 10,
    horizontalPadding: 30,
    verticalPadding: 20,
    textInput: textArray[i],
    textColor: "#0E2E40",
    textSize: textSize,
    textFont: "MyriadConceptItalic-SemiboldSemiCondensedItalic",
    borderColor: "#28ABE3",
    frameColor: "#C6E7F7",
    borderWidth: 10,
    horizontalRadius: 20,
    verticalRadius: 20,
});


/*
// INSERTING A COMPOSITE TEXT FRAME
// ------------------------
// INPUT PARAMETERS

createCompositeTextFrameInsert({
	//  startY: 410,
	//  startX: 60,
	startY: 550,
	startX: 50,
	frameWidth: 330,
	frameHeight: 250,
	// textInput: textArray[i],
	// textInput: "Thiisisjustalineintendedtobeonlyalineandnomorestilliputsomemorestaffanditdoe",
	textInput: "Thiisisjustalineintendedtobeonlyalineandnomorestilliputsomemorestaffanditdoe",
	textColor: "#0E2E40",
	// textSize: text01Size,
	textSize: 30,
	textFont: "MyriadConceptItalic-SemiboldSemiCondensedItalic",
	borderColor: "#28ABE3",
	frameColor: "#C6E7F7",
});

// ------------------------
// eof eof eof eof eof eof eof eof eof
*/


// INSERTING A RECTANGLE
// ------------------------

var doc = app.activeDocument;
var layerRef = doc.layers.getByName("layerLogos2").groupItems.add();
var rectRef = layerRef.pathItems.roundedRectangle(1055,22,318,196);
rectRef.name = "imagelogo01Frame";
rectRef.opacity = 80;
// Inserting some color
var newRGBColor = new RGBColor();
var insertingRGB = HexRgbToDec("#C6E7F7");
newRGBColor.red = insertingRGB[0];
newRGBColor.green = insertingRGB[1];
newRGBColor.blue = insertingRGB[2];
//
rectRef.fillColor = newRGBColor;
rectRef.filled = true;

// ------------------------
// eof eof eof eof eof eof eof eof eof

var options = new ExportOptionsJPEG();
options.antiAliasing = true;
options.artBoardClipping = true;
options.horizontalScale = 100;
options.verticalScale = 100;	

var newFile = new File(filePath + postName + "-" + pageNumber + ".jpg");
app.activeDocument.exportFile(newFile, ExportType.JPEG , options) ;


}
// ------------------------
// ------------------------
// eof eof eof PAGEN PAGEN 
// ------------------------
// ------------------------


}


/*

// INSERTING A COMPOSITE TEXT FRAME
//		ASSISTED AA PARAMETERS
// ------------------------
// It will serve you parameters for createCompositeTextFrameInsert()
// According to more Intuitive way
// It will require as few parameters as possible calculating the rest randomly
// Required Arguments
// 

function compTextAssistedAAInsert (inputObject) {

} 
function compTextAssistedAA () {
}

	// SEMI ADJUSTABLE PARAMETERS
	// ASSISTED AA PARAMETERS
	// 		I have divided the Artboard in 4 Vertical Anchors
	//		 Three Horizontal Anchor Points
	//		 4 Posible textSizes
	//		 3 Possible Widths
	//       Maximum 6 lines of text
	//  At the moment frameWidth can only be 990
	var startYArray = [1054 , 790, 550, 280];
	var startXArray = [50 , 330, 375, 700];
	var frameWidthArray = [330, 720, 990];
	var textSizeArray = [ 30, 45, 60, 75];
	// next variable is a bi-dimensional array, maxCharIn1Line[i][j]
	// i = frameWidthArray ,  3 possible values, i.e i = 0 , frameWidthArray = 330
	// j = textSizeArray  ,  4 possible values, i.e. j=1 , textSizeArray = 45  
	var maxCharIn1Line = [[26, 18, 14, 10], [57, 38, 28, 23], [76, 52, 39, 32]];
	var maxCharIn2Line = [[],[],[]];
	for (var i = 0 ; i < maxCharIn1Line.length ; i++) {
		for (var j = 0; j < maxCharIn1Line[i].length ; j++){
			maxCharIn2Line[i][j] = maxCharIn1Line[i][j] * 2;
		}
	}
	var maxCharIn3Line = [[],[],[]];
	for (var i = 0 ; i < maxCharIn1Line.length ; i++) {
		for (var j = 0; j < maxCharIn1Line[i].length ; j++){
			maxCharIn3Line[i][j] = maxCharIn1Line[i][j] * 3;
		}
	}
	var maxCharIn4Line = [[],[],[]];
	for (var i = 0 ; i < maxCharIn1Line.length ; i++) {
		for (var j = 0; j < maxCharIn1Line[i].length ; j++){
			maxCharIn4Line[i][j] = maxCharIn1Line[i][j] * 4;
		}
	}
	var maxCharIn5Line = [[],[],[]];
	for (var i = 0 ; i < maxCharIn1Line.length ; i++) {
		for (var j = 0; j < maxCharIn1Line[i].length ; j++){
			maxCharIn5Line[i][j] = maxCharIn1Line[i][j] * 5;
		}
	}
	var maxCharIn6Line = [[],[],[]];
	for (var i = 0 ; i < maxCharIn1Line.length ; i++) {
		for (var j = 0; j < maxCharIn1Line[i].length ; j++){
			maxCharIn6Line[i][j] = maxCharIn1Line[i][j] * 6;
		}
	}
	var maxCharIn7Line = [[],[],[]];
	for (var i = 0 ; i < maxCharIn1Line.length ; i++) {
		for (var j = 0; j < maxCharIn1Line[i].length ; j++){
			maxCharIn7Line[i][j] = maxCharIn1Line[i][j] * 7;
		}
	}


// ------------------------
// eof eof eof eof eof eof eof eof eof
*/
