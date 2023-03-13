let lis = document.querySelectorAll(".list");

function activelink() {
  lis.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
lis.forEach((item) => item.addEventListener("click", activelink));
