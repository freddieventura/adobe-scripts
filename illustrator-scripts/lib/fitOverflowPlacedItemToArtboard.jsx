// Script by freddieventura
// https://github.com/freddieventura/
// lastModified on : 21/04/2021


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


