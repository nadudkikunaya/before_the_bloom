localStorage.setItem("score_hor", 0);
localStorage.setItem("score_ver", 0);
localStorage.setItem("name", null);

function buttonScene1() {
  let title = document.getElementsByClassName("title-container")[0];

  let button = document.getElementsByClassName("button-container")[0];
  title.style.visibility = "hidden";
  button.style.visibility = "hidden";

  transitionToPage("./register_scene.html");
}
