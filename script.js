const inputTitle = document.querySelector(".title");
const runButtonTodo = document.querySelector(".add-to-do");
const mainTodolist = document.querySelector(".to-do-list");

function todo() {
  if (inputTitle.value === "") {
    alert("You should enter text.");
    return;
  };

  const todo = document.createElement("div");
  todo.classList.add("todo");

  const list = document.createElement("h3");
  list.classList.add("list");
  list.innerHTML = inputTitle.value;

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.classList.add("delete-button");
  deleteButton.innerHTML = "Delete";
  deleteButton.addEventListener("click", (e) => {
    e.target.parentNode.remove();
  });

  const completed = document.createElement("button");
  completed.type = "button";
  completed.classList.add("completed");
  completed.innerHTML = "Completed";
  completed.addEventListener("click", (e) => {
    const parentTodo = e.target.parentNode;
    parentTodo.classList.toggle("completed-to-do-list");
  });

  todo.append(list, completed, deleteButton);
  mainTodolist.append(todo);
};

runButtonTodo.addEventListener("click", todo);
runButtonTodo.addEventListener("click", () => {
  inputTitle.value = "";
});
