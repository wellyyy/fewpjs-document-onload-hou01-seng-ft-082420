// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    let lol = document.querySelector("#text")
    lol.innerHTML = "This is really cool!"

});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);