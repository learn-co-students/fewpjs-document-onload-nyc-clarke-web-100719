// Your code goes here


document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");

    const log = {
        line: () => {
            const arrStrLine = new Array(50).fill("-");
            console.log(arrStrLine.join(""));
        }
    };

    const pIdText = document.getElementById("text");
    pIdText.innerHTML = "This is really cool!";
});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);