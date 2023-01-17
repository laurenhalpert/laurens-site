const div = document.createElement("div");
document.querySelector("div#hobbies").append(div);

div.setAttribute("id", "favorites");

const h2 = document.createElement("h2");
h2.textContent = "My Favorites";
document.querySelector("div#favorites").appendChild(h2);
