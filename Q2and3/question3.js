"use strict";

var grouped_images =
    {
        "Christchurch":
        ["christchurch8105352.jpeg", "christchurchcathedral8105329.jpg",
            "christchurchchathedral8105387.jpg", "christchurchpress8105370.jpg",
            "christchurchurchartgallery8105441.jpg", "christchurchurchartgallery8105444.jpg",
            "christchurchurchartgallery8105448.jpg"]
        ,
        "Queenstown":
        ["queenstown8135665.jpg", "queenstown8135678.jpg", "queenstownjetty8135650.jpg"]
        ,
        "Remarkables":
        ["remarkables8135623.jpg", "remarkables8135627.jpg", "remarkables8145706.jpg",
            "remarkables8155745.jpg", "remarkables8155746.jpg", "remarkables8155750.jpg",
            "remarkables8155753.jpg", "remarkables8155754.jpg"]
    };


function generateThumbnailFilename(img_filename) {
    var img_root = img_filename.substring(0, img_filename.indexOf('.'));
    return "images/thumbnails/" + img_root + "_thumbnail.jpg";
}



function addLinkedImage(divElem, img_filename) {
    // Complete this function.
    //
    // This function should do everything that the version developed in
    // Question 2 does, and *additionally* build a hyperlink around the
    // thumbnail image that is linked to the full-size image
    // Start by copying over the code you developed for Q2, and then extend!
    var img = document.createElement('img');
    img.src = generateThumbnailFilename(img_filename);
    var hyperlink = document.createElement('a');
    hyperlink.href = "images/" + img_filename;
    divElem.appendChild(hyperlink);
    hyperlink.appendChild(img);
}

function addHeading(divElem, text) {
    // Complete this function.
    //
    // This functcion should create an 'h2' element, set its innerHTML
    // to be the 'text' passed in, and then append the heading as a
    // child element of 'divElem'
    var heading = document.createElement('h2');
    heading.innerHTML = text;
    divElem.appendChild(heading);
}


function displayViewer() {
    // Complete this function 
	// refer to question 3 for specifications

    var mainviewerDiv = document.getElementById("mainviewer");
    for (var key in grouped_images) {
        addHeading(mainviewerDiv, key);
        var div1;
        var remaining = 0;
        for (var i = 0; i < grouped_images[key].length; i++) {
            if (remaining == 0) {
                div1 = document.createElement("div");
                div1.setAttribute("class", "divcenter");
                mainviewerDiv.appendChild(div1);
                remaining = 3;
            }
            addLinkedImage(div1, grouped_images[key][i]);
            remaining--;
        }
    }
}

