function change() {
    var toChange = document.getElementsByClassName("head");
    for (i = 0; i < toChange.length; i++) {
        toChange[i].innerHTML = "You've visited me";

    }
}



window.onload = function () {
    var toChange = document.getElementsByClassName("head");

    var butn = document.getElementById("btn");
    butn.onclick = function () {
        console.log("you clicked");
        change();

    }
}