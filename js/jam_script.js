"use strict";

// put desired "onClick" behavior here
var onSubmitClick = function() {
    // replace form with image
    // alert("hi leslie");
    // document.getElementById("reg").innerText = "Diane";
    document.getElementById("call-to-action").remove();         // remove register now text
    document.getElementById("register-form").remove();          // and remove form
    document.getElementById("register-success").hidden = false; // and replace with this
}

// when the document (page/window/whatever you want to call it) is
// finished loading (on "DOMContentLoaded")...
// document.addEventListener("DOMContentLoaded", function() {
//     grab the button by element id ("submit"), add an event listener for "click"
//     that calls "onSubmitClick" when the button is clicked
//     document.getElementById("submit").addEventListener("click", onSubmitClick);
// });


