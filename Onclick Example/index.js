function setOfEvents() {
  var content = document.getElementById("content");
  var button = document.getElementById("button");

  button.onclick = function() {
    if (content.className == "open") {
      //shrink box
      content.className = "";
      button.innerHTML = "Show more ";
    } else {
      //open the box
      content.className = "open";
      button.innerHTML = "Show less ";
    }
  };
}

window.onload = function() {
  setOfEvents();
};
