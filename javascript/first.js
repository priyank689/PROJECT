// // Coding Challenge #2

// /*
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

// HINT: Use an if/else statement 😉

let a = prompt("enter mark weight");
let b = prompt("enter mark height");
const mark = a / (b * b);
// console.log("mark bmi is ", mark);

let c = prompt("enter john weight");
let d = prompt("enter john height");
const john = c / (d * d);
// console.log("john bmi is ", john);
console.log("who has the higher BMI");
comp();
function comp() {
  if (mark > john) {
    console.log("marks has higher BMI");
    console.log(`marks BMI is higher:${mark} and johns bmi is lower:${john}`);
  } else if (mark == john) {
    console.log(`both have equal bmi ${mark}`);
  } else {
    console.log("john has higher BMI");
    console.log(`johns BMI is higher:${john} and mark bmi is lower:${mark}`);
  }
}







* {
  margin: 0;
  padding: 0;
}
body {
  /* background: black; */
  background-color: rgb(55, 54, 54);
  font-family: "Zalando Sans Expanded", sans-serif;
  font-optical-sizing: auto;
  font-weight: 200;
  font-style: normal;
  /* background-image: url("bgg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; */
  /* */
}
nav {
  display: flex;
  position: relative;
  color: white;
  background-color: rgba(40, 32, 32, 0.289);
}
nav button {
  background-color: none;
}
nav ul li {
  display: inline-flex;
  margin-left: 2.5rem;
  margin-top: 1rem;
}
nav img {
  margin-left: 6rem;
  margin-top: 0.7rem;
}

nav button {
  margin-left: 6rem;
  margin-top: 0.6rem;
  border-radius: 5rem;
  width: 9rem;
  height: 3rem;
  outline: none;
  background-color: rgb(245, 176, 49);
  border: 1px solid orange;
  color: white;
}
nav ul li i {
  margin-top: 0.35rem;
  margin-right: 3.5px;
  color: orange;
}

.secondpart {
  display: flex;
  color: white;
  justify-content: space-around;
  /* background-image: url("orange12.png.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: sticky; */
}
.secondpart div {
  width: 25rem;
  border-radius: 2rem;
  margin-top: 3rem;
}
.secondpart div h2 {
  text-align: center;
  margin-top: 1rem;
  background-color: orange;
}
.secondpart div i {
  font-size: 3rem;
  margin-left: 10rem;
  margin-top: 2.3rem;
  background-color: orange;
}
.secondpart .order {
  background-color: orange;
  height: 21rem;
}
.secondpart div p {
  background-color: orange;
  padding: 8px;
  line-height: 1.7rem;
}
.secondpart .delivery {
  background-color: orange;
}
.secondpart .delicious {
  background-color: orange;
}
.span h2 {
  color: orange;
  padding-top: 5rem;
  margin-top: -1rem;
  text-align: center;
  font-family: "Pacifico", cursive;
  font-weight: 400;
  font-style: normal;
  /* text-decoration: underline; */
}
.span h1 {
  color: white;
  padding-top: 1rem;
  margin-top: -1rem;
  letter-spacing: 5px;
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.third {
  display: flex;
  justify-content: space-around;
  margin-top: -1rem;
}
.third div img {
  height: 27rem;
  margin-top: 4rem;
  border-radius: 33rem;
}
.third div img:hover {
  height: 27.9rem;
  margin-top: 4rem;
  border-radius: 35rem;
  transition: 1s;
}

.third div h2 {
  color: white;
  text-align: center;
  padding-top: 1.5rem;
  padding-bottom: 2rem;
  /* margin: 8px; */
}

.viewmore {
  text-align: center;
}
.viewmore .view:hover {
  width: 9rem;
  height: 3.6rem;
  color: orange;
  background-color: rgb(33, 32, 32);
  border: 1px solid orange;
  outline: none;
  border-radius: 10rem;
  transition: 0.5s;
}
div .view {
  width: 9rem;
  height: 3.6rem;
  background-color: orange;
  color: white;
  outline: none;
  border-radius: 10rem;
}
.navbarstyleouter {
  height: 8rem;
  margin-top: -1rem;
  padding-top: 3.5rem;
}
.navbarstyleouter .navbarstyle {
  width: 40%;
  display: flex;
  /* justify-content: space-around; */
  height: 3rem;
  border-radius: 2rem;
  background-color: rgb(55, 54, 54);
  margin-left: 28.5rem;
  /* align-items: center;
  align-content: center;
  text-align: center; */
}
.navbarstyleouter .navbarstyle h5 {
  color: white;
  margin-top: 0.7rem;
  /* background-color: rgb(55, 54, 54); */
}
.navbarstyleouter .navbarstyle h5 .all {
  color: white;
  /* margin-top: 0.7rem; */
  outline: none;
  background-color: orange;
  width: 6.28rem;
  border-radius: 2rem;
  height: 3rem;
  margin-top: -0.7rem;
  border: none;
}
.navbarstyleouter .navbarstyle h5 .button2 {
  /* margin-top: 0.7rem; */
  outline: none;
  color: white;
  background-color: rgb(55, 54, 54);
  width: 6.28rem;
  border-radius: 2rem;
  height: 3rem;
  margin-top: -0.7rem;
  border: none;
}
.navbarstyleouter .navbarstyle h5 .button2:hover {
  /* margin-top: 0.7rem; */
  outline: none;
  color: white;
  background-color: orange;
  width: 6.28rem;
  border-radius: 2rem;
  height: 3rem;
  margin-top: -0.7rem;
  border: none;
}

.fourth {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr 1fr 1fr;
  height: 58rem;
  justify-content: space-around;
}
.fourth .first img {
  height: 20rem;
  margin-bottom: 9rem;
}
.fourth img:hover {
  height: 20.3rem;
  transition: 0.5s;
}
.fourth .first1 img {
  height: 20rem;
  margin-left: 3.5rem;
}
.fourth .first1 img:hover {
  height: 20.3rem;
  transition: 0.5s;
}

.fourth .first2 img {
  height: 18rem;
  margin-top: 0.1rem;
}
.fourth .first2 img:hover {
  height: 18.3rem;
  transition: 0.5s;
}

.fourth .first h5 {
  color: white;
  text-align: center;
  margin-top: -9rem;
}
.fourth .first p {
  color: white;
  text-align: center;
}
.fourth .first h5 p h7 {
  text-align: center;
  color: orange;
}

.fourth .first2 h5 {
  color: white;
  text-align: center;
  margin-top: 1.7rem;
}
.fourth .first2 p {
  color: rgb(183, 177, 177);
  text-align: center;
}

.fourth .first1 h5 {
  color: white;
  text-align: center;
  margin-top: 0.6rem;
}
.fourth .first1 p {
  color: rgb(183, 177, 177);
  text-align: center;
}

.fifth {
  background: white;
  display: flex;
  justify-content: space-between;
  /* background-color: white; */
  height: 40rem;
  padding-top: 3rem;
  color: black;
}
.fifth .fifthone {
  width: 50%;
  /* background-color: white;
  color: white; */
}

.fifth .fifthtwo {
  width: 50%;
  text-align: center;
  /* background-color: white;
  color: white; */
}

