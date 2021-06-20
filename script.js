"use strict";
/*
console.log(document.querySelector(".message")); // it will show us the whole html tag which have a class of message.
console.log(document.querySelector(".message").textContent); // it will show in console th text in html tag having class message
document.querySelector(".message").textContent = "🎉 Correct Number!";
document.querySelector(".number").textContent = 13;
document.querySelector(".guess").value = 12;
console.log(document.querySelector(".guess").value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1; // Added one to so that the bounderies 1 and 20 also get included
let score = 20;
let highscore = 0;
document.querySelector(".check").addEventListener("click", function () {
  let val = Number(document.querySelector(".guess").value);
  if (!val) {
    document.querySelector(".message").textContent = "⛔ No Number Entered!";
  } else if (val === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (secretNumber > val) {
    if (score > 1) {
      document.querySelector(".message").textContent = "😕 To Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😔 You Loose The Game!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (secretNumber < val) {
    if (score > 1) {
      document.querySelector(".message").textContent = "😕 To High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😔 You Loose The Game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".highscore").textContent = highscore;
  console.log(secretNumber);
});
