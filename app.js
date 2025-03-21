document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.querySelector("#inputField");
  const addBtn = document.querySelector(".btn");
  const todoList = document.querySelector(".todoItems ul");

  addBtn.addEventListener("click", function () {
    addTodo();
  });

  inputField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTodo();
    }
  });

  function addTodo() {
    const items = inputField.value.trim();
    if (items === "") return;

    const li = document.createElement("li");
    const label = document.createElement("label");

    label.textContent = items;

    const iconsDiv = document.createElement("div");
    iconsDiv.classList.add("icons");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");

    const deleteIcon = document.createElement("span");
    deleteIcon.classList.add("material-symbols-outlined");
    deleteIcon.textContent = "delete";

    deleteIcon.addEventListener("click", function () {
      li.remove();
    });
    iconsDiv.appendChild(checkbox);
    iconsDiv.appendChild(deleteIcon);
    li.appendChild(label);
    li.appendChild(iconsDiv);
    todoList.appendChild(li);

    inputField.value = "";
    inputField.focus();
  }
});
