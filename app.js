let header = document.querySelector("header");
let headerAnchor = document.querySelectorAll("header nav ul a");

window.addEventListener("scroll", (e) => {
  if (window.scrollY !== 0) {
    header.style = "background-color: rgba(9, 118, 124, 0.7); color: white";
    headerAnchor.forEach((e) => {
      e.style = "color: white";
    });
  } else {
    header.style = "";
    headerAnchor.forEach((e) => {
      e.style = "";
    });
  }
});
