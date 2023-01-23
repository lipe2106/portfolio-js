/*
Skapad av Lina Petersson
Senast uppdaterad: 2023-01-19
*/

"use strict";

//Get elements from HTML
let h1container = document.getElementById("h1-container");
let userInfo = document.getElementById("user-info");
let projectContainer = document.getElementById("project-container");
let courses = document.getElementById("courses");
let work = document.getElementById("work");

//Call init function when window loads
window.onload = init;

//Function to call function
function init() {
    showUserInfo(1);
    showProjects();
    showCourses();
    showWork();
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

            userInfo.innerHTML += 
            `<p>${item.description}</p>
            <blockquote>"${item.quote}"</blockquote>`
        });
    })
}

// Show projects
function showProjects() {
    fetch("https://www.adrenalinas.se/portfolio/api/projectapi.php")
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            projectContainer.innerHTML += 
            `<div class="project-card">
                <a href="${item.path}.html" title="Klicka för mer info">
                    <img src="img/${item.image1}" alt="Projektbild" />
                    <h3>${item.name}</h3>
                    <p class="description">${item.description}</p>
                    <p>...</p>
                </a>
            </div>`
        });
    })
}

// Show courses
function showCourses() {
    fetch("https://www.adrenalinas.se/portfolio/api/courseapi.php")
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            courses.innerHTML += 
            `<tr>
                <td class="one">${item.name}</td>
                <td class="two">${item.knowledge}</td>
                <td class="three"><a href="${item.syllabus}" target="_blank" title="Länk till kursplan (Öppnas i annat fönster)"><img src="img/link.png" alt="Länkikon" class="link" /></a></td>
            <tr>`
        });
    })
}

// Show work
function showWork() {
    fetch("https://www.adrenalinas.se/portfolio/api/workapi.php")
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            work.innerHTML += 
            `<tr>
                <td class="one">${item.company}</td>
                <td class="two">${item.title}</td>
                <td class="three">${item.period}</td>
            <tr>`
        });
    })
}
