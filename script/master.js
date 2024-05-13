function buttonScene1() {
  let title = document.getElementsByClassName("title-container")[0];

  let button = document.getElementsByClassName("button-container")[0];
  title.style.visibility = "hidden";
  button.style.visibility = "hidden";

  transitionToPage("./register_scene.html");
}
