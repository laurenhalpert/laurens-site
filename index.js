

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