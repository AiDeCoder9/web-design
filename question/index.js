const paragraph = document.getElementById("paragraph");
const button = document.getElementById("btn");

button.addEventListener("click", function () {
  paragraph.innerText =
    "<button>Hello world text changed from javascript<button>";
  //   paragraph.innerHTML = `<button>new button</button>`;
  if (paragraph.style.display === "none") {
    paragraph.style.display = "block";
    paragraph.style.backgroundColor = "red";
  } else {
    paragraph.style.display = "none";
  }
});
