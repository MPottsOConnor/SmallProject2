"use strict";

var photo_details = [
    { file: "christchurch8105352.jpeg", filesize: 1642621 }
    , { file: "christchurch8105356.jpeg", filesize: 2170021 }
    , { file: "christchurch8105406.jpg", filesize: 2252274 }
    , { file: "christchurchcathedral8105329.jpg", filesize: 936631 }
    , { file: "christchurchchathedral8105387.jpg", filesize: 1047573 }
    , { file: "christchurchpress8105370.jpg", filesize: 898708 }
    , { file: "christchurchpress8105372.tif", filesize: 10931729 }
    , { file: "christchurchurchartgallery8105441.jpg", filesize: 1104666 }
    , { file: "christchurchurchartgallery8105444.jpg", filesize: 1199118 }
    , { file: "christchurchurchartgallery8105448.jpg", filesize: 695987 }
    , { file: "queenstown8135644.jpg", filesize: 2290009 }
    , { file: "queenstown8135665.jpg", filesize: 911133 }
    , { file: "queenstown8135678.jpg", filesize: 812770 }
    , { file: "queenstownjetty8135650.jpg", filesize: 1564584 }
    , { file: "remarkables8135623.jpg", filesize: 599296 }
    , { file: "remarkables8135627.jpg", filesize: 668989 }
    , { file: "remarkables8145706.jpg", filesize: 936446 }
    , { file: "remarkables8145731.tif", filesize: 925865 }
    , { file: "remarkables8155745.jpg", filesize: 1189581 }
    , { file: "remarkables8155746.jpg", filesize: 1079125 }
    , { file: "remarkables8155750.jpg", filesize: 1014981 }
    , { file: "remarkables8155753.jpg", filesize: 1191699 }
    , { file: "remarkables8155754.jpg", filesize: 1088554 }
    , { file: "remembrancebridge8105347.jpg", filesize: 830057 }
    , { file: "remembrancebridge8105349.tiff", filesize: 10933160 }
];


function isWebImageFriendly(filename) {
    // Rewrite this function so that it returns 'true' only if 'filename' ends
    // in either '.jpg' or '.jpeg'
    return filename.match(/\.jpe?g$/);
}

function isWebSizeFriendly(filesize) {
    // Rewrite this function so that only files with a 'filesize' under
    // 2000000 are considered "web size" friendly (i.e. returns true)
    return filesize < 2000000;
}


function generateThumbnailFilename(img_filename) {
    var img_root = img_filename.substring(0, img_filename.indexOf('.'));
    return "images/thumbnails/" + img_root + "_thumbnail.jpg";
}


function addLinkedImage(divElem, img_filename) {
    // Complete this function.
    //
    // It should create an HTML image element that is the *thumbnail*
    // version of the 'img_filename' parameter passed in (i.e. use
    // 'generateThumbnailFilename()' above) and append this as a child
    // element of 'divElem'
    var img = document.createElement('img');
    img.src = generateThumbnailFilename(img_filename);
    divElem.appendChild(img);
}

function placeMatch(img_filename, place_list) {
    // Complete this function.
    //
    // It should check to see if 'img_filename' starts with any of the
    // places in the 'place_list' array (case-insensitive match)
    //
    // If a match occurs then then the matching
    // place name should be return (e.g. "Christchurch") otherwise
    // "Unknown" should be returned
    for (var place of place_list) {
        if (img_filename.indexOf(place.toLowerCase()) == 0) {
            return place;
        }
    }
    return 'Unknown';
}

var place_list = ["Christchurch", "Queenstown", "Remarkables"];

function displayViewer() {
    // Refer to Question 2 of the test to read about what this top-level
    // JavaScript function implements

    var mainviewerDiv = document.getElementById("mainviewer");

    var len = photo_details.length;

    for (var i = 0; i < len; i++) {


        if (isWebSizeFriendly(photo_details[i].filesize) && isWebImageFriendly(photo_details[i].file) && placeMatch(photo_details[i].file, place_list) != 'Unknown') {
            addLinkedImage(mainviewerDiv, photo_details[i].file);
        }
    }
}

