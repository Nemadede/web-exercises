window.onload = () => {
    var display2 = document.querySelector(".second_display");
    display2.style.display = "none";
    // purpose_displayers = document.getElementsByClassName("love");
    // for (i = 0; i < purpose_displayers.length; i++) {
    //     console.log(purpose_displayers[i].nextSibling)
    //     trim_sentence(purpose_displayers[i].innerText);
    // }
}

var renum_creator = document.querySelector(".renum_create");
renum_creator.addEventListener('click', display);

backbtn = document.querySelector(".back");
backbtn.addEventListener('click', back);

function display() {
    document.querySelector(".second_display").style.display = "block";
    console.log(renum_creator);
    document.querySelector(".first_display").style.display = "none"
}

function back() {
    document.querySelector(".second_display").style.display = "none";

    document.querySelector(".first_display").style.display = "block"
}

function trim_sentence(text) {
    results = text;
    console.log(results)
    result_array = results.split(" ");
    console.log(result_array.length)
    if (result_array.length > 10) {
        result_array = result_array.slice(0, 10);
        results = result_array.join(" ") + ("...")
    }
    return results;
}