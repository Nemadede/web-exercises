window.onload = () => {

    let dropbtns=document.getElementsByClassName("dropdown");
    let drop = document.getElementsByClassName("drop");
    for (let i=0; i<drop.length; i++){
        hide(drop[i]);
    }
   let btn1 = document.getElementById("dropdown1");
   btn1.addEventListener("click", clickNdrop);
   let btn2 = document.getElementById("dropdown2");
   btn2.addEventListener("click", clickNdrop);
   let btn3 = document.getElementById("dropdown3");
   btn3.addEventListener("click", clickNdrop);

}

function hide(elem){
    elem.style.display="none";
}
function unhide(elem){
    elem.style.display="block";
}
function clickNdrop(e){
    let drop = document.getElementsByClassName("drop");
    for (let i=0; i<drop.length; i++){
        hide(drop[i]);
    }
          
    let current = document.querySelector("."+e.currentTarget.id);

    console.log(current.style.display);
    if(current.style.display=="block"){
        current.style.display="none"
        // hide(current);  
       
    }
    else{ 
        let drop = document.getElementsByClassName("drop");
        for (let i=0; i<drop.length; i++){
        hide(drop[i]);
    }
        current.style.display="block"
       
    }
    // unhide(current);
 
   
    
}