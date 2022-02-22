
window.onload = () => {

    //hide task namer
    let taskname = document.getElementById("popup");
    hide(taskname);
    //hide all tab contents
    let main = document.getElementsByClassName("content");
    for (let i = 0; i < main.length; i++) {

        hide(main[i]);
    }
    //show default task view
    let defaultView = document.getElementsByClassName("default");
    for (let i = 0; i < defaultView.length; i++) {

        unHide(defaultView[i]);
    }

    //mainbody1
    let mainBody = document.getElementsByClassName("body");

    //hide task main_body2
    let taskBody = document.getElementById("main_task_body");
    hide(taskBody);


    let btn1 = document.getElementById("task").addEventListener('click', tab);
    let btn2 = document.getElementById("today").addEventListener('click', tab);
    let btn3 = document.getElementById("schedule").addEventListener('click', tab);

    showpopup();


    let tasknamer = document.getElementById("task_name");
    let container = document.getElementById("todo_tasks");
    let popup = document.getElementById("popup");
    //creating new task container
    tasknamer.onkeypress = (e) => {

        let chars = [];
        if (e.keyCode !== 13) {
            chars.push(e.key);
            // console.log(chars);
        }

        else {
            e.preventDefault();
            let text = tasknamer.value;
            console.log(text);

            //created Element 
            let holder = document.createElement("div");
            holder.setAttribute("class", "holder");
            let contentChild = document.createElement("div");
            let containerChild = document.createElement("p");
            containerChild.addEventListener("click", showTodoTask_Page);
            contentChild.addEventListener("click", showTodoTask_Page);
            containerChild.setAttribute("class", "todo_link");
            contentChild.setAttribute("class", "todo_list_box");
            let ul = creatTags("ul", "numList");
            ul.setAttribute("id", "ul");
            contentChild.appendChild(ul);
            container.appendChild(holder);
            holder.appendChild(contentChild);
            holder.appendChild(containerChild);
            console.log(contentChild);
            console.log(containerChild);
            containerChild.innerHTML = text;

            let body = document.getElementById("container");
            body.classList.remove("bgc");
            hide(popup);

            let removable = document.getElementById("remove_on_create");

            hide(removable);
        }



    }


    let backButton = document.getElementById("back_btn");
    backButton.addEventListener('click', hideTodoTask_Page);

    let taskCreator1 = document.getElementById("addTask");
    let taskCreator2 = document.getElementById("tasknameText");
    console.log(taskCreator1);
    console.log(taskCreator2);
    taskCreator1.onclick = () => {
        newCreatedTask();
        taskCreator2.value = "";
    }

    taskCreator2.onkeypress = (e) => {
        chars = [];
        if (e.keyCode !== 13) {
            chars.push(e.key);
            // console.log(chars);
        }

        else {
            newCreatedTask();
            taskCreator2.value = "";
        }
    }


}


//hide all elements

function hide(elem) {
    elem.style.display = "none";
}
function unHide(elem) {
    elem.style.display = "block";
}

//display function

function tab(e) {
    let buttons = document.getElementsByClassName("button");
    let containers = document.getElementsByClassName("content");

    for (let j = 0; j < containers.length; j++) {

        hide(containers[j]);

    }

    let btn = e.currentTarget.id;
    let show = document.getElementsByClassName(btn)[0];
    console.log(show);
    show.style.display = "block";


}

// show popup to name task category

function showpopup() {
    let body = document.getElementById("container");
    let myform = document.querySelector("#MyForm");
    let nameNewTask = document.getElementById("tasklink");

    nameNewTask.onclick = () => {
        let taskName = document.getElementById("popup");
        console.log(taskName);
        if (taskName.style.display == "block") {
            taskName.style.display = "none";
            body.classList.remove("bgc");
        } else {

            body.classList.add("bgc");
            taskName.style.display = "block";
            myform.reset();

        }
    }

}


//function to change to task creation view
function showTodoTask_Page(e) {
    let mainBody = document.getElementById("body");
    let taskBody = document.getElementById("main_task_body");
    //get list name and put as task heading
    let title = document.getElementById("title");
    let listName = e.currentTarget.nextElementSibling.textContent;
    insert(title, listName);
    hide(mainBody);
    unHide(taskBody);
}

function hideTodoTask_Page() {
    let mainBody = document.getElementById("body");
    let taskBody = document.getElementById("main_task_body");
    unHide(mainBody);
    hide(taskBody);
}


function newTask() {
    let adder = document.getElementById("newTask");
    let newtask = document.getElementById("input-task-name");
    let taskview = document.getElementById("TaskView");
    let taskBody = document.getElementById("main_task_body");
    adder.onclick = () => {

        let taskdiv = document.createElement("div");
        console.log(taskdiv);
        taskdiv.setAttribute("class", "Onetask");
        taskdiv.setAttribute("id", "Onetask");
        taskBody.appendChild(taskdiv);
        taskdiv.appendChild(taskview);


    }
}

function insert(name, text) {
    console.log(text);
    name.innerHTML = text;
}

function creatTags(elem, classname) {
    let newElement = document.createElement(elem);
    newElement.className += '' + classname;
    return newElement;
}

function newCreatedTask() {
    let taskbarConatainer = document.getElementById("taskTodo");
    let taskCreator2 = document.getElementById("tasknameText");
    taskName = taskCreator2.value;
    let taskholder = creatTags("div", "taskholder");
    let task1 = creatTags("div", "taskbar");
    taskbarConatainer.appendChild(taskholder);
    let checkboxHolder = creatTags("div", "checkholder");
    let check = creatTags("input", "isDone");
    check.setAttribute("type", "checkbox");

    let namer = creatTags("textarea", "nameHolder");
    namer.setAttribute("rows", 1);
    // namer.setAttribute("cols", 10);
    let taskNameHolder = creatTags("div", "taskname-holder");
    let dropiconholder = creatTags("div", "iconholder");
    let dropicon = creatTags("i", "fa fa-chevron-down");
    dropicon.innerHTML = "dropdown";
    dropicon.setAttribute("id", "clickdrop");
    dropiconholder.setAttribute("id", "drop");
    // console.log(dropicon);
    taskholder.appendChild(task1);
    task1.appendChild(checkboxHolder);
    checkboxHolder.appendChild(check);
    task1.appendChild(taskNameHolder);
    taskNameHolder.appendChild(namer);
    task1.appendChild(dropiconholder);
    dropiconholder.appendChild(dropicon);
    namer.innerHTML = taskName;
    let nameValue = namer.value;

    //dropdown of each task
    let dropdown = creatTags("div", "dropdown");
    taskholder.appendChild(dropdown);
    dropdown.setAttribute("id", "dropdown_description");
    hide(dropdown);
    //task description section
    let section1 = creatTags("section", "notes");
    let descriptionlabel = creatTags("label", "label");
    descriptionlabel.innerHTML = "Notes";
    let task_description = creatTags("textarea", "task_description");

    task_description.setAttribute("rows", 7);
    dropdown.appendChild(section1);
    section1.appendChild(descriptionlabel);
    section1.appendChild(task_description);

    //date and priority
    let section2 = creatTags("section", "task_date_priority");

    let div1 = creatTags("div", "date_holder");
    let dlabel = creatTags("label", "label");
    let dateContainer = creatTags("div", "dateContainer");
    let dIndicator = creatTags("span", "dateIndicator");
    dlabel.innerHTML = "Due Date";
    let today = creatTags("button", "today");
    let tomorrow = creatTags("button", "tomorrow");
    let currentdate = creatTags("input", "date");
    currentdate.setAttribute("type", "date");
    currentdate.setAttribute("min", presentdate());
    today.innerHTML = "Today";
    tomorrow.innerHTML = "Tomorrow";
    dropdown.appendChild(section2);
    section2.appendChild(div1);
    div1.appendChild(dlabel);
    div1.appendChild(dIndicator);
    div1.appendChild(dateContainer);
    dateContainer.appendChild(today);
    dateContainer.appendChild(tomorrow);
    dateContainer.appendChild(currentdate);

    let div2 = creatTags("div", "pholder");
    let plabel = creatTags("label", "label");
    section2.appendChild(div2);
    plabel.innerHTML = "Task Priority";
    let options = creatTags("select", "taskpriority");
    let option0 = creatTags("option", "");
    option0.setAttribute("value", "");
    let option1 = creatTags("option", "");
    option1.setAttribute("value", "low");
    let option2 = creatTags("option", "");
    option2.setAttribute("value", "med");
    let option3 = creatTags("option", "");
    option3.setAttribute("value", "high");
    div2.appendChild(plabel);
    div2.appendChild(options);
    options.appendChild(option0);
    options.appendChild(option1);
    options.appendChild(option2);
    options.appendChild(option3);
    option0.innerHTML = "";
    option1.innerHTML = "Low";
    option2.innerHTML = "Medium";
    option3.innerHTML = "High";
    let cancelholder = creatTags("div", "cancelholder");
    let cancleTask = creatTags("button", "cancel");
    cancleTask.innerHTML = "Cancle";
    section2.appendChild(cancelholder);
    cancelholder.appendChild(cancleTask);

    let dropdownMenu = document.getElementById("dropdown_description");
    let dropInnitiator = document.getElementById("drop");

    dropdownFunc(dropInnitiator, dropdownMenu);

    let li_holder = document.getElementById("ul");
    let listTaskElements = creatTags("li", "listTaskElements");
    li_holder.appendChild(listTaskElements);
    listTaskElements.innerHTML = nameValue;
    let listValue = listTaskElements.textContent;
    console.log(listValue);

    //work on task delete with Ray and clearing input box on enter
    check.onclick = () => {
        taskbarConatainer.removeChild(taskholder);
        if (nameValue == listValue) {
            li_holder.removeChild(listTaskElements);
        }
    }
    cancleTask.onclick = () => {
        taskbarConatainer.removeChild(taskholder);
        if (nameValue == listValue) {
            li_holder.removeChild(listTaskElements);
        }
    }
    //working on dropdown functionality
    //date
    currentdate.onchange = () => {


        let laterdates = currentdate.value;
        console.log(laterdates);
        let Afterdate = new Date(laterdates);
        console.log(Afterdate.getDay());
        let day = Date.now();
        let curentday = new Date(day);
        day2 = new Date();
        let tomorrowday = day2.setDate(curentday.getDate() + 1);
        var tomorrowday1 = new Date(tomorrowday);
        console.log(curentday);
        console.log(tomorrowday1);
        let indicator = document.getElementsByClassName("dateIndicator");
        if (Afterdate.getDate() == curentday.getDate()) {
            indicator.innerHTML = "Today";
        } else {
            if (Afterdate.getDate() == tomorrowday1.getDate()) {
                indicator.innerHTML = "Tomorrow";
            } else {
                //validate date
                indicator.innerHTML = laterdates;
            }
        }
    }
    let indicator = document.getElementsByClassName("dateIndicator");
    today.onclick = () => {
        indicator.innerHTML = "Today";
        console.log("1");
    }
    tomorrow.onclick = () => {
        indicator.innerHTML = "Tomorrow";
        console.log("1");
    }


    options.onchange = () => {
        let opt = options.value;
        console.log(opt);
        let border = document.querySelector(".taskholder");
        border.style.borderLeft = "5px solid Transparent";
        if (opt == "low") {
            border.style.borderLeftColor = "blue";
            console.log(border);
        }
        else if (opt == "med") {
            border.style.borderLeftColor = "orange";
        } else if (opt == "high") {
            border.style.borderLeftColor = "red";
        } else {
            border.style.borderLeft = "1px solid Transparent";
            border.style.borderLeftColor = "rgba(43, 43, 43, 0.233)";
        }
    }


}

function dropdownFunc(elem1, elem2) {
    elem1.onclick = () => {
        if (elem2.style.display == "block" || elem2.style.display == "flex") {
            hide(elem2);
        } else {
            unHide(elem2);
            elem2.style.display = "flex";
        }
    }
}

function presentdate() {
    let day_today = Date.now();
    let newdate = new Date(day_today);
    return newdate;
}
