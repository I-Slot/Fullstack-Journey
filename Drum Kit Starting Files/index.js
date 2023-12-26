let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

// document.querySelectorAll("button")[].addEventListener("click", handleClick);
function handleClick() {
  //   let soundPlay = new Audio("sounds/tom-1.mp3");
  //   soundPlay.play();
  //   console.log(this.innerHTML);
  this.style.color = "white";
}

function soundByLetter(key) {
  if (this.innerHTML === "w") {
    let soundPlay = new Audio("sounds/tom-1.mp3");
    soundPlay.play();
  } else if (this.innerHTML === "a") {
    let soundPlay = new Audio("sounds/tom-2.mp3");
    soundPlay.play();
  } else if (this.innerHTML === "s") {
    let soundPlay = new Audio("sounds/tom-3.mp3");
    soundPlay.play();
  } else if (this.innerHTML === "d") {
    let soundPlay = new Audio("sounds/tom-4.mp3");
    soundPlay.play();
  } else if (this.innerHTML === "j") {
    let soundPlay = new Audio("sounds/snare.mp3");
    soundPlay.play();
  } else if (this.innerHTML === "k") {
    let soundPlay = new Audio("sounds/crash.mp3");
    soundPlay.play();
  } else if (this.innerHTML === "l") {
    let soundPlay = new Audio("sounds/kick-bass.mp3");
    soundPlay.play();
  }
}

document.addEventListener("keypress", function (e) {
  console.log(e);
});

// addEventListener;

// Higher order Function

// function add(num1, num2) {
//   return num1 + num2;
// }

// function subtract(num1, num2) {
//   return num1 - num2;
// }

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// function subtract(num1, num2) {
//   return num1 / num2;
// }

// function calculator(num1, num2, operator) {
//   return operator(num1, num2);
// }

// console.log(add(8, 9, operator));
