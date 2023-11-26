let counter = 1;
setInterval(() => {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 4000);

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
