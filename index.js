

const h2 = document.createElement("h2");
h2.textContent = "My Favorites";
document.querySelector("div#favorites").appendChild(h2);

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

const favorites = document.getElementById("favorites");
function clickAlert3 () {
    alert("These are a few of my favorite things");
}

favorites.addEventListener("mouseover", clickAlert3);

const body = document.getElementById("body");
function changeColor () {
    document.body.style.backgroundColor = "#EBCEFF";
}

document.addEventListener("click", changeColor);