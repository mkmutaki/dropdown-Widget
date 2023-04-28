const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const closed = document.getElementById("closed");
const featuresNavbar = document.querySelector(".features-navi");
const featuresBtn = document.querySelector(".features-btn");
const buttonUp1 = document.querySelector("#Up1");
const buttonDown1 = document.querySelector("#Down1");
const companyNavbar = document.querySelector(".company-navi");
const companyBtn = document.querySelector(".company-btn");
const buttonUp2 = document.querySelector("#Up2");
const buttonDown2 = document.querySelector("#Down2");

burger.addEventListener("click", function () {
  menu.classList.remove("hidden");
});

closed.addEventListener("click", function () {
  menu.classList.add("hidden");
});

featuresBtn.addEventListener("click", function () {
  featuresNavbar.classList.toggle("hidden");
  buttonDown1.classList.toggle("hidden");
  buttonUp1.classList.toggle("hidden");
});

companyBtn.addEventListener("click", function () {
  companyNavbar.classList.toggle("hidden");
  buttonDown2.classList.toggle("hidden");
  buttonUp2.classList.toggle("hidden");
});
