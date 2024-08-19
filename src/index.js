document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskForce = document.querySelector("form");

  newTaskForce.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const newToDo = e.target.querySelector("#new-task-description").value

    buildToDo(newToDo);

    newTaskForce.reset();
  })
});

function buildToDo(newToDo) {
  const taskList = document.createElement ("li");
  const deleteButton = document.createElement ("button");

  deteleButton.textContent = "x";

  taskList.textContent = newToDo;

  taskList.appendChild(deleteButton);

  document.querySelector("#tasks").appendChild(taskList);
  
  deleteButton.addEventListener("click", handleDelete);
}

function handleDelete(e){
  e.target.parentNode.remove();
}