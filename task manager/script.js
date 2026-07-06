let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");
let taskCount = document.getElementById("taskCount");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [
  "Pani pilo",
  "Khana khao",
  "So jao",
];

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.textContent = task;
    let delbtn = document.createElement("button");
    delbtn.textContent = "Delete";
    delbtn.classList.add("delete-btn");
    delbtn.onclick = function () {
      deleteTask(index);
    };
    li.appendChild(delbtn);
    taskList.appendChild(li);
  });
  taskCount.textContent = `Total Tasks: ${tasks.length}`;
}
renderTasks();
function addTask() {
  let input = taskInput.value.trim();
  if (input === "") {
    return;
  }
  tasks.push(input);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
  taskInput.value = "";
}
addBtn.addEventListener("click", function () {
  // renderTasks()
  addTask();
});
function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}
