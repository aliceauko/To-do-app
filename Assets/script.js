//selectors
const textInput = document.querySelector(".text-input");
const btn = document.querySelector(".btn");
const list = document.querySelector(".list");
const filterCategory = document.querySelector(".filter-todo");

//event listeners

btn.addEventListener("click", addTodo);
list.addEventListener("click", checkDelete);
filterCategory.addEventListener("click", filterTodo);

//function

function addTodo(event) {
  event.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //create li
  const newList = document.createElement("li");
  newList.innerText = textInput.value;
  //append the li to the div
  newList.classList.add("todo-item");
  todoDiv.appendChild(newList);
  //marked button
  const completedBtn = document.createElement("button");
  completedBtn.innerHTML = '<i class="fas fa-check"></>';
  completedBtn.classList.add("completed-btn");
  todoDiv.appendChild(completedBtn);

  //trash button
  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = '<i class="fas fa-trash"></>';
  trashBtn.classList.add("trash-btn");
  todoDiv.appendChild(trashBtn);

  list.appendChild(todoDiv);

  //Clear input value
  textInput.value = "";
}

function checkDelete(e) {
  const item = e.target;

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitioned", function () {
      todo.remove();
    });
  }

  if (item.classList[0] === "completed-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
    const todos = list.childNodes;
    todos.forEach(function (todo) {
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
          case "uncompleted":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;

      }
    });
  }
  