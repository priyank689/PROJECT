let h2 = document.querySelector("h2");
// const guess = prompt("Enter a random number");
// let userinput = prompt("NOW,Enter your guessed number");
const guess = 10;
const a = Math.floor(Math.random(10) * guess) + 1;
// let userinput = prompt("NOW,Enter your guessed number");
console.log(a);
let bgcolor = document.querySelector("body");
// console.log(a);
let h3 = document.querySelector("h3");
let count = 0;
let input = document.querySelector("input");
let button = document.querySelector("button");
button.addEventListener("click", function (event) {
  if (input.value == a) {
    h3.innerText = "Your guess was right";
    h3.classList.add("green");
    bgcolor.classList.add("bg");
    count++;
  } else if (input.value > a) {
    // console.log("right");
    h3.innerText = "Your guess is to high";
    h3.classList.add("red");
    count++;
  } else if (input.value < a) {
    // console.log("right");
    h3.innerText = "Your guess is to low";
    h3.classList.add("red");
    count++;
  } else {
    console.log("wrong");
    count++;
  }
  (h2.innerText = "chances you have attended"), count;
});
// let p1 = document.querySelector("p");
// p1.classList.add("paragraph");
// p1.innerText = console.log(a);

// let para1 = document.createElement("p");
// para1.innerText = "hii i a red";
// document.querySelector("body").append(para1);
// para1.classList.add("red");
