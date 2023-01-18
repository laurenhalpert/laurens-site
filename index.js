

const h2 = document.createElement("h2");
h2.textContent = "My Favorites";

const div = document.getElementById("favorites");

const img = document.getElementById("sorrento");
div.insertBefore(h2, img);



const me = document.getElementById("me");
function clickAlert () {
    alert("It's me, hi!");
}
me.addEventListener("click", clickAlert);

const travel = document.getElementById("travel");
function clickAlert2 () {
    alert("I like to travel to cool places.");
}

travel.addEventListener("dblclick", clickAlert2);





const body = document.getElementById("body");
function changeColor (event) {
    if (event.key === "ArrowLeft") {
        document.body.style.backgroundColor = "#EBCEFF";
    }
    if (event.key === "ArrowRight") {
        document.body.style.backgroundColor = "#FFCEEE";
    }
    if (event.key === "ArrowDown") {
        document.body.style.backgroundColor = "#B3F3D3";
    }
    if (event.key === "ArrowUp") {
        document.body.style.backgroundColor = "#D3D3D3";
    }
}

body.addEventListener("keydown", changeColor);

const sorrento = document.getElementById("sorrento");

function changeImage () {
    sorrento.src ="IMG_0419.JPG";
    sorrento.style.height = "500px";
}

sorrento.addEventListener("click", changeImage);

const header = document.getElementById("header");
function changeFont () {
    header.style.fontFamily = "Apple Chancery";
}
function changeFontBack() {
    header.style.fontFamily = "Helvetica";
}

header.addEventListener("mouseover", changeFont);
header.addEventListener("mouseout", changeFontBack);