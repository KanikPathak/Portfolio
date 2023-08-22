var pressed = document.querySelector(".kutta");
var dabba = document.querySelector(".game");
var side= document.querySelector("side-box")
var height = dabba.clientHeight;
var width = dabba.clientWidth;

pressed.addEventListener("mouseover", function(event) {
    var marginLeft = Math.floor(Math.random() * width);
    var marginTop = Math.floor(Math.random() * height);
    var marginRight=Math.floor(Math.random() * width);
    var marginBottom=Math.floor(Math.random() * height);

    pressed.style.marginLeft = marginLeft + "px";
    pressed.style.marginTop = marginTop+ "px";
    pressed.style.marginRight = marginRight + "px";
    pressed.style.marginBottom = marginBottom + "px";
});

var offerButton = document.querySelector("#offer");

// var leftDistance = offerButton.clientLeft