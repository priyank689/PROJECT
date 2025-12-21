let all55 = document.getElementById("all-navbar");
let all1=document.getElementById("nav-burger");
let all2=document.getElementById("nav-drinks");
let all3=document.getElementById("nav-pasta");
let all4=document.getElementById("nav-salads");
let all5=document.getElementById("nav-deserts");
let all6=document.getElementById("nav-pizzas");
let all7=document.getElementById("menu-section");
let all8=document.getElementById("home-section");
let all9=document.getElementById("blog-section");
let all10=document.getElementById("reservation-section");
let all11=document.getElementById("pages-section");

all55.addEventListener("click", function () {
  window.location.href = "index.html";
});
all1.addEventListener("click", function () {
  window.location.href = "Menu-Burger.html";
});
all2.addEventListener("click", function () {
  window.location.href = "Menu-Drinks.html";
});
all3.addEventListener("click", function () {
  window.location.href = "Menu-Pasta.html";
});
all4.addEventListener("click", function () {
  window.location.href = "Menu-Salads.html";
});
all5.addEventListener("click", function () {
  window.location.href = "Menu-Desert.html";
});
all6.addEventListener("click", function () {
  window.location.href = "Menu-Pizza.html";
});
all7.addEventListener("click", function () {
  window.location.href = "Menu.html";
});
all8.addEventListener("click", function () {
  window.location.href = "index.html";
});
all9.addEventListener("click", function () {
  window.location.href = "blog.html";
});
all10.addEventListener("click", function () {
  window.location.href = "reservation.html";
});
all11.addEventListener("click", function () {
  window.location.href = "pages.html";
});
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    name: name,
    price: price,
    qty: 1
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(name + " added to cart");
}
let gotocart1=document.getElementById("ccart");
let gotocart=document.getElementById("ccart1");

gotocart1.addEventListener("click", function () {
  window.location.href = "cart.html";
});
gotocart.addEventListener("click", function () {
  window.location.href = "cart.html";
});