// 04.01
const divList = document.querySelectorAll("div");
for (div of divList) {
  div.addEventListener("click", function (e) {
    this.classList.add("clicked");
  });
}
