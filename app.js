const open = document.querySelector(".x-mark");
const close = document.querySelector(".btn-nav");
const container = document.querySelector(".container");

open.addEventListener("click", () => {
  container.classList.remove("show-nav");
  document.body.style.backgroundColor = "white";
});

close.addEventListener("click", () => {
  container.classList.add("show-nav");
  document.body.style.backgroundColor = "gray";
});
