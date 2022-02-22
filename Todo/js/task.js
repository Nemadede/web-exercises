let dropicon = document.getElementById("dropicon");
let dropcontent = document.getElementById("dropdown");
hide(dropcontent);
// dropdown to add description on task
console.log(dropicon);
console.log(dropcontent);
dropdown(dropicon, dropcontent);
// go back to main task view

//hide and show additional description on each task

function dropdown(elem1, elem2) {
    elem1.onclick = () => {
        if (elem2.style.display == "block") {
            hide(elem2);
        } else {
            unHide(elem2);
        }
    }
}

