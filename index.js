

const h2 = document.createElement("h2");
h2.textContent = "My Favorites";
document.querySelector("div#favorites").appendChild(h2);

const ul = document.getElementsByClassName("books-movies-food");
document.querySelector("div#favorites").appendChild(ul);
