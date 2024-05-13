window.transitionToPage = function (href) {
  let body = document.querySelector("body");
  body.style.background = "white";
  body.style.opacity = 0;
  setTimeout(function () {
    window.location.href = href;
  }, 850);
};

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("body").style.opacity = 1;
});
