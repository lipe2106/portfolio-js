/*
Skapad av Lina Petersson
Senast uppdaterad: 2023-01-19
*/

"use strict";

//Get elements from HTML
let h1container = document.getElementById("h1-container");
let intranetInfo = document.getElementById("intranet-info");
let intranetImg = document.getElementById("intranet-img");


//Call init function when window loads
window.onload = init;

//Function to call function
function init() {
    showProjectById(3);
    showUserInfo(1);
}

// Show user info
function showUserInfo(id) {

    fetch("https://www.adrenalinas.se/portfolio/api/userapi.php?id=" + id)
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            h1container.innerHTML += 
            `<h1>${item.name}</h1>
            <h2>${item.title}</h2>`
        });
    })
}

// Show user info
function showProjectById(id) {

    fetch("https://www.adrenalinas.se/portfolio/api/projectapi.php?id=" + id)
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            intranetInfo.innerHTML += 
            `<p>${item.description}</p>
            <blockquote><img src="img/link.png" alt="Länkikon" class="link" />Detta projekt är tyvärr inte publicerat</blockquote>`
            
            intranetImg.innerHTML += 
            `<div class="img-card">
                <a href="img/${item.image1}">
                    <img src="img/${item.image1}" alt="Projektbild" />
                    <p>Startsida desktop</p>
                </a>
            </div>
            <div class="img-card">
                <a href="img/${item.image2}">
                    <img src="img/${item.image2}" alt="Projektbild" />
                    <p>Undersida för lagersaldo</p>
                </a>
            </div>
            <div class="img-card">
                <a href="img/${item.image3}">
                    <img src="img/${item.image3}" alt="Projektbild" />
                    <p>Sökfunktion</p>
                </a>
            </div>
            <div class="img-card">
                <a href="img/${item.image4}">
                    <img src="img/${item.image4}" alt="Projektbild" />
                    <p>Hantering av kategorier</p>
                </a>
            </div>
            <div class="img-card">
                <a href="img/${item.image5}">
                    <img src="img/${item.image5}" alt="Projektbild" />
                    <p>Produktsida</p>
                </a>
            </div>`
        });
    })
}