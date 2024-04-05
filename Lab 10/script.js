document.addEventListener("DOMContentLoaded", function() {
// let changeTextBtn = document.getElementById("changeTextBtn");
// let paragraph = document.getElementById("message");
// changeTextBtn.addEventListener("click", function(){
//     paragraph.textContent = "Text changed successfully!";
// });

document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("message").textContent = "Text changed successfully!";
});

// change background color 
document.body.style.backgroundColor = randomColor();

// append new paragraph:
const para = document.createElement("p");
para.textContent = "New paragraph added dynamically!";
//const node = document.createTextNode("New paragraph added dynamically!");
//para.appendChild(node);
document.getElementById("container").appendChild(para);
});

// Function to generate a random color
// function randomColor() {
//     let letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// Function to generate a random RGB color
function randomColor() {
    let red = Math.floor(Math.random() * 256); // max value 255
    let green = Math.floor(Math.random() * 256); 
    let blue = Math.floor(Math.random() * 256); 
    
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}