import "./styles.css"

const toDoForm = document.querySelector(".form");
const inputTitle = document.getElementById("title");
const toDosContainer = document.getElementById("toDos");
const donesContainer = document.getElementById("dones"); 

document.addEventListener("DOMContentLoaded", () => {

    // Display form
    todoCreateButton.addEventListener("click", () => {
      toDoForm.style.display = "block";
    });

    // Submit new task
    submitTodoBtn.addEventListener("click", () => {
        if(inputTitle.value === "") {
            alert("Missing title value!")
        } else {
            const li = document.createElement("li");

            const taskSpan = document.createElement("span");
            taskSpan.textContent = inputTitle.value;
            
            const editButton = document.createElement("button");
            editButton.classList.add("editTdBtn");
            editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
            
            const deleteButton = document.createElement("button");
            deleteButton.classList.add("deleteTdBtn");
            deleteButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';

            li.appendChild(taskSpan);
            li.appendChild(editButton);
            li.appendChild(deleteButton);

            toDosContainer.appendChild(li);

            inputTitle.value = "";

        }
      });

    // Helper function to find the parent <li> element
    function findParentListItem(element) {
        while (element && element.tagName !== "LI") {
            element = element.parentElement;
        }
        return element;
    };


    // Check/uncheck tasks
    toDosContainer.addEventListener("click", (event) => {
        const listItem = findParentListItem(event.target);
        if (listItem) {
            listItem.classList.add("checked");
            const textSpan = listItem.querySelector("span");
            if (textSpan) {
                textSpan.style.textDecoration = "line-through";
            }

            const icons = listItem.querySelectorAll(".fa-solid");
            icons.forEach((icon) => {
                icon.classList.add("icon-green");
            });


            toDosContainer.removeChild(listItem);
            donesContainer.appendChild(listItem);
        }
    });

    donesContainer.addEventListener("click", (event) => {
        const listItem = findParentListItem(event.target);
        if (listItem) {
            // Move the task back to the "To Do" list
            listItem.classList.remove("checked");
            const textSpan = listItem.querySelector("span");
            if (textSpan) {
                textSpan.style.textDecoration = "none"; // Remove line-through
            }

            const icons = listItem.querySelectorAll(".fa-solid");
            icons.forEach((icon) => {
                icon.classList.remove("icon-green");
            });
            donesContainer.removeChild(listItem);
            toDosContainer.appendChild(listItem);
        }
    });
  });
