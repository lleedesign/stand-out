"use strict";

// put desired "onClick" behavior here
var onSubmitClick = function() {
    // replace form with image
    // alert("hi leslie");
    // document.getElementById("reg").innerText = "Diane";
    document.getElementById("registerNow").remove();
    document.getElementById("reg").innerHTML = '<img class="yaman" src="img_yaman.png" />';
}

// when the document (page/window/whatever you want to call it) is
// finished loading (on "DOMContentLoaded")...
// document.addEventListener("DOMContentLoaded", function() {
//     grab the button by element id ("submit"), add an event listener for "click"
//     that calls "onSubmitClick" when the button is clicked
//     document.getElementById("submit").addEventListener("click", onSubmitClick);
// });


