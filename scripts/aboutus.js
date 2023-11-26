const popup = document.querySelector(".popup");

const x = document.querySelector(".popup-content h1");

window.addEventListener("load", () => {
  popup.classList.add("showPopup");
  popup.childNodes[1].classList.add("showPopup");
});
x.addEventListener("click", () => {
  popup.classList.remove("showPopup");
  popup.childNodes[1].classList.remove("showPopup");
});

var timer;
var ele = document.getElementById("timer");

(function () {
  var amnt = 1074024;
  timer = setInterval(() => {
    ele.innerHTML = amnt.toLocaleString();
    amnt -= 1;
  }, 2000);
})();
