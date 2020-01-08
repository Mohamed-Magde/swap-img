const slider = document.querySelector("#slider");
const btn = document.querySelector(".open");

btn.addEventListener("click", () => {
  slider.classList.toggle("close");
});
