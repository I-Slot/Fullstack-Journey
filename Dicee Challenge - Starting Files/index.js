let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6);

// let playerOne = document.getElementsByClassName("img1");
// let playerTwo = document.getElementsByClassName("img2");
// console.log(`images/dice${randomNumber1}.png`);
let playerOne = document.querySelectorAll("img")[0];
let playerTwo = document.querySelectorAll("img")[1];

playerOneSource = `images/dice${randomNumber1}.png`;
playerTwoSource = `images/dice${randomNumber2}.png`;

// playerOne.setAttribute("src", playerOneSource);
playerOne.setAttribute("src", playerOneSource);
playerTwo.setAttribute("src", playerTwoSource);

let heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  heading.innerHTML = "Player 1 wins";
} else if (randomNumber1 === randomNumber2) {
  heading.innerHTML = "No winner";
} else {
  heading.innerHTML = "Player 2 wins";
}
