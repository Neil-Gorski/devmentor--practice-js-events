const btns = document.querySelectorAll("button");

const clickBtn = function (e) {
  if (this.innerText !== "clicked") {
    this.innerText = "clicked";
    console.log("clicked");
  }
};

for (btn of btns) {
  console.log(btn);
  btn.addEventListener("click", clickBtn);
}
