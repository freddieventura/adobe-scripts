// Script by freddieventura
// https://github.com/freddieventura/
// Template for news of 2 pages post for realspanishnews insta

main();

function main() {

// ---------------------
// LIST OF VARIABLE ARGUMENTS (USER INPUT)

var postDate = '30/04/2022'; 

var text01Size = 45;
// text01 normaly less than 115 chars
var text01 = "El Banco Santander ha sido condenado por usura, al comercializar unas  tarjetas de crédito \"Santander Box Gold\" que aplican un TAE del 39,08%  (treinta y nueve con cero ocho por ciento)";

// text02 normaly less than 115 chars
var text03 = "Santander Bank has been sentenced for usury as they were marketing a credit card \"Santander Box Gold\" charging 39.08 % APR (thirty nine point zero eight percent)."

var backgroundImage1 = "santander-bicycles-street.jpg";

// LIST OF FIXED ARGUMENTS
// They are not that prone to change, but they do according to project

var companyName = 'realspanishnews';
var socialMedia = 'instagram';
var companyPath = "/c/nidoria/realspanishnews/"


var imageLogo1 = "realspanishnews-logo-insta.png"; 
var imageLogo2 = "spanish-flag-dialog-on.png";
var imageLogo3 = "english-flag-dialog-off.png";
var imageLogo4 = "spanish-flag-dialog-off.png";
var imageLogo5 = "english-flag-dialog-on.png";


// ---------------------
// PROCESSING PARAMETERS (NO USER INPUT FROM HERE)


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
// var companyPath = "/c/nidoria/realspanishnews/content/instagram/21-22/03/";


// ------------------------
// eof eof eof eof eof eof eof eof eof


// ------------------------
// ------------------------
// PAGE1 PAGE1 PAGE1 PAGE1 PAGE1
// ------------------------
// ------------------------
var pageNumber = '01';


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
placedItem.left = 0;
placedItem.top = artboardHeight;
fitOverflowPlacedItemToArtboard("imageLogo1" , "mainArtboard");
placedItem.width = placedItem.width * 0.25;
placedItem.height = placedItem.height * 0.25;

// ------------------------
// eof eof eof eof eof eof eof eof eof

// INSERTING AN EXTERNAL IMAGE
// ------------------------

var placedItem = doc.layers.getByName("layerLogos").placedItems.add();
placedItem.file = new File(assetsPath + imageLogo2);
placedItem.name = "imageLogo2";
placedItem.left = 895;
placedItem.top = 160;
fitOverflowPlacedItemToArtboard("imageLogo2" , "mainArtboard");
placedItem.width = placedItem.width * 0.09;
placedItem.height = placedItem.height * 0.09;

// ------------------------
// eof eof eof eof eof eof eof eof eof

// INSERTING AN EXTERNAL IMAGE
// ------------------------

var placedItem = doc.layers.getByName("layerLogos").placedItems.add();
placedItem.file = new File(assetsPath + imageLogo3);
placedItem.name = "imageLogo3";
placedItem.left = 1000;
placedItem.top = 160;
fitOverflowPlacedItemToArtboard("imageLogo3" , "mainArtboard");
placedItem.width = placedItem.width * 0.09;
placedItem.height = placedItem.height * 0.09;

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

// INSERTING TEXT BY AREA TEXT
// ------------------------

var rectRef = app.activeDocument.pathItems.rectangle(385, 85, 950, 195);
var areaTextRef = app.activeDocument.textFrames.areaText(rectRef);
areaTextRef.name = "text01";
areaTextRef.layer = "layerText";
// header normaly less than 115 chars
areaTextRef.contents = text01;
areaTextRef.selected = true;
areaTextRef.textRange.characterAttributes.size = text01Size; 
areaTextRef.textRange.characterAttributes.textFont = app.textFonts.getByName("MyriadConceptItalic-SemiboldSemiCondensedItalic");

// ------------------------

// INSERTING A RECTANGLE
// ------------------------

var doc = app.activeDocument;
var layerRef = doc.layers.getByName("layerLogos").groupItems.add();
var rectRef = layerRef.pathItems.rectangle(385,85,950,195);
rectRef.name = "text01Frame";
rectRef.opacity = 60;

// ------------------------

// eof eof eof eof eof eof eof eof eof

// INSERTING TEXT BY AREA TEXT
// ------------------------

var rectRef = app.activeDocument.pathItems.rectangle(55, 900, 155, 43);
var areaTextRef = app.activeDocument.textFrames.areaText(rectRef);
areaTextRef.name = "pageText";
areaTextRef.layer = "layerText";
areaTextRef.contents = "Page 1/2";
areaTextRef.selected = true;
areaTextRef.textRange.characterAttributes.size = 40;
areaTextRef.textRange.characterAttributes.textFont = textFonts[0];
areaTextRef.textRange.characterAttributes.textFont = app.textFonts.getByName("MyriadConceptItalic-SemiboldSemiCondensedItalic");

// ------------------------
// eof eof eof eof eof eof eof eof eof

//var ExportType = New ExportType();
//ExportType.JPEG ;

var options = new ExportOptionsJPEG();
options.antiAliasing = true;
options.artBoardClipping = true;
options.horizontalScale = 100;
options.verticalScale = 100;	

var newFile = new File(filePath + postName + "-" + pageNumber + ".jpg");
app.activeDocument.exportFile(newFile, ExportType.JPEG , options) ;


// ------------------------
// ------------------------
// eof eof eof PAGE1 PAGE1 
// ------------------------
// ------------------------


// ------------------------
// ------------------------
// PAGE2 PAGE2 PAGE2 PAGE2 PAGE2
// ------------------------
// ------------------------

var pageNumber = '02';


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
placedItem.left = 0;
placedItem.top = artboardHeight;
fitOverflowPlacedItemToArtboard("imageLogo1" , "mainArtboard");
placedItem.width = placedItem.width * 0.25;
placedItem.height = placedItem.height * 0.25;

// ------------------------
// eof eof eof eof eof eof eof eof eof

// INSERTING AN EXTERNAL IMAGE
// ------------------------

var placedItem = doc.layers.getByName("layerLogos").placedItems.add();
placedItem.file = new File(assetsPath + imageLogo4);
placedItem.name = "imageLogo4";
placedItem.left = 895;
placedItem.top = 160;
fitOverflowPlacedItemToArtboard("imageLogo4" , "mainArtboard");
placedItem.width = placedItem.width * 0.09;
placedItem.height = placedItem.height * 0.09;

// ------------------------
// eof eof eof eof eof eof eof eof eof

// INSERTING AN EXTERNAL IMAGE
// ------------------------

var placedItem = doc.layers.getByName("layerLogos").placedItems.add();
placedItem.file = new File(assetsPath + imageLogo5);
placedItem.name = "imageLogo5";
placedItem.left = 1000;
placedItem.top = 160;
fitOverflowPlacedItemToArtboard("imageLogo5" , "mainArtboard");
placedItem.width = placedItem.width * 0.09;
placedItem.height = placedItem.height * 0.09;

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

// INSERTING TEXT BY AREA TEXT
// ------------------------

var rectRef = app.activeDocument.pathItems.rectangle(385, 85, 950, 195);
var areaTextRef = app.activeDocument.textFrames.areaText(rectRef);
areaTextRef.name = "text03";
areaTextRef.layer = "layerText";
// header normaly less than 115 chars
areaTextRef.contents = text03;
areaTextRef.selected = true;
areaTextRef.textRange.characterAttributes.size = text01Size; 
areaTextRef.textRange.characterAttributes.textFont = app.textFonts.getByName("MyriadConceptItalic-SemiboldSemiCondensedItalic");

// ------------------------
// eof eof eof eof eof eof eof eof eof

// INSERTING A RECTANGLE
// ------------------------

var doc = app.activeDocument;
var layerRef = doc.layers.getByName("layerLogos").groupItems.add();
var rectRef = layerRef.pathItems.rectangle(385,85,950,195);
rectRef.name = "text03Frame";
rectRef.opacity = 60;

// ------------------------
// eof eof eof eof eof eof eof eof eof


// INSERTING TEXT BY AREA TEXT
// ------------------------

var rectRef = app.activeDocument.pathItems.rectangle(55, 900, 155, 43);
var areaTextRef = app.activeDocument.textFrames.areaText(rectRef);
areaTextRef.name = "pageText";
areaTextRef.layer = "layerText";
areaTextRef.contents = "Page 2/2";
areaTextRef.selected = true;
areaTextRef.textRange.characterAttributes.size = 40;
areaTextRef.textRange.characterAttributes.textFont = textFonts[0];
areaTextRef.textRange.characterAttributes.textFont = app.textFonts.getByName("MyriadConceptItalic-SemiboldSemiCondensedItalic");

// ------------------------
// eof eof eof eof eof eof eof eof eof


var options = new ExportOptionsJPEG();
options.antiAliasing = true;
options.artBoardClipping = true;
options.horizontalScale = 100;
options.verticalScale = 100;	

var newFile = new File(filePath + postName + "-" + pageNumber + ".jpg");
app.activeDocument.exportFile(newFile, ExportType.JPEG , options) ;



// ------------------------
// ------------------------
// eof eof eof PAGE2 PAGE2 
// ------------------------
// ------------------------


}



// FITTING A PLACED ITEM TO ARTBOARD OVERFLOWING
// ------------------------
// This function will fit the placedItem to the artboard dimensions
// It will stretch the image till not compromise the aspect ratio of it
// Will overflow on the artboard coordinates that cannot fit in order to
// Not to leave any place empty
// In the axis it overflows , the item will be moved to the center of the artboard

function fitOverflowPlacedItemToArtboard (placedItem, artboardName) {

var placedItem = app.activeDocument.placedItems.getByName(placedItem);
var thisArtboard = app.activeDocument.artboards.getByName(artboardName);
var placedItemAspectratio = placedItem.width / placedItem.height;
var artboardWidth = thisArtboard.artboardRect[2] - thisArtboard.artboardRect[0];
var artboardHeight = thisArtboard.artboardRect[1] - thisArtboard.artboardRect[3];
var artboardAspectratio = artboardWidth / artboardHeight;

if (placedItemAspectratio == artboardAspectratio ) {
    placedItem.width = artboardWidth;
    placedItem.height = artboardHeight;
} else {
// Will get the size of the minimum of the sides so to span everything
    if (placedItem.width < placedItem.height){
        placedItem.width = artboardWidth;
        placedItem.height = artboardHeight / placedItemAspectratio;
// Now need to shift it to the center of the artboard
        var placedItemCenter = (placedItem.controlBounds[1] - placedItem.controlBounds[3]) / 2;
        var artboardCenter = (thisArtboard.artboardRect[1] - thisArtboard.artboardRect[3]) / 2;
        var placedItemShift = artboardCenter - placedItemCenter;
        placedItem.top -= placedItemShift;
    } else {
        placedItem.height = artboardHeight;
        placedItem.width = artboardWidth * placedItemAspectratio;
        var placedItemCenter = (placedItem.controlBounds[0] - placedItem.controlBounds[2]) / 2;
        var artboardCenter = (thisArtboard.artboardRect[0] - thisArtboard.artboardRect[2]) / 2;
        var placedItemShift = artboardCenter - placedItemCenter;
        placedItem.left -= placedItemShift;
    }
}
}

// ------------------------
// eof eof eof eof eof eof eof eof eof

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






