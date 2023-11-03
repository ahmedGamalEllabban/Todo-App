let myTask = document.querySelector("input[type='text']");
let addBtn = document.getElementById("addTask");
let taskViewer = document.querySelector(".task-viewer");
let i = window.localStorage.getItem("index") ?? 1;
window.onload = checkTasks();

for (j = 1; j <= i; j++) {
  if (window.localStorage.getItem(`task${j}`)) {
    taskValue = window.localStorage.getItem(`task${j}`);
    let newTask = document.createTextNode(`${taskValue}`);
    let myDivTask = document.createElement("div");
    myDivTask.setAttribute("class", "task");
    myDivTask.setAttribute("id", j);
    let mySpan = document.createElement("span");
    let deleteBtnText = document.createTextNode("Delete");
    let deleteBtn = document.createElement("button");
    let doneBtnText = document.createTextNode("Done");
    let doneBtn = document.createElement("button");
    let myBtns = document.createElement("div");
    deleteBtn.setAttribute("class", "delete");
    deleteBtn.setAttribute("id", j);
    doneBtn.setAttribute("class", "done");
    doneBtn.setAttribute("id", j);
    mySpan.append(newTask);
    myDivTask.appendChild(mySpan);
    deleteBtn.append(deleteBtnText);
    doneBtn.append(doneBtnText);
    myBtns.appendChild(doneBtn);
    myBtns.appendChild(deleteBtn);
    myDivTask.appendChild(myBtns);
    taskViewer.append(myDivTask);
  }
}

addBtn.onclick = function () {
  if (myTask.value !== "") {
    let newTask = document.createTextNode(`${myTask.value}`);
    let myDivTask = document.createElement("div");
    myDivTask.setAttribute("class", "task");
    myDivTask.setAttribute("id", i);
    let mySpan = document.createElement("span");
    let deleteBtnText = document.createTextNode("Delete");
    let deleteBtn = document.createElement("button");
    let doneBtnText = document.createTextNode("Done");
    let doneBtn = document.createElement("button");
    let myBtns = document.createElement("div");
    doneBtn.setAttribute("class", "done");
    doneBtn.setAttribute("id", i);
    deleteBtn.setAttribute("class", "delete");
    deleteBtn.setAttribute("id", i);
    mySpan.append(newTask);
    myDivTask.appendChild(mySpan);
    deleteBtn.append(deleteBtnText);
    doneBtn.append(doneBtnText);
    myBtns.appendChild(doneBtn);
    myBtns.appendChild(deleteBtn);
    myDivTask.appendChild(myBtns);
    taskViewer.append(myDivTask);
    window.localStorage.setItem(`task${i}`, myTask.value);
    i++;
    window.localStorage.setItem("index", i);
  } else {
    alert("Please Don't Keep The Input Empty");
  }
  checkTasks();
};
let deleteBtn = document.querySelectorAll(".delete");

window.onclick = function (e) {
  if (e.target.tagName == "BUTTON" && e.target.className == "delete") {
    document.getElementById(`${e.target.id}`).remove();
    window.localStorage.removeItem(`task${e.target.id}`);
    checkTasks();
  }
  if (e.target.tagName == "BUTTON" && e.target.className == "done") {
    if (
      document.getElementById(`${e.target.id}`).classList.contains("is-done")
    ) {
      document.getElementById(`${e.target.id}`).classList.remove("is-done");
    } else {
      document.getElementById(`${e.target.id}`).classList.add("is-done");
    }
  }
};

function checkTasks() {
  let allTasks = document.querySelectorAll(".task");
  document.getElementsByClassName("no-tasks")[0].innerHTML = "";
  if (window.localStorage.length <= 1) {
    let noTasks = document.createTextNode("There Is No Tasks To Show");
    document.getElementsByClassName("no-tasks")[0].append(noTasks);
  } else if (allTasks.length > 0) {
    document.getElementsByClassName("no-tasks")[0].innerHTML = "";
  }
}
