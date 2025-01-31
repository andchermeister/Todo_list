import { createTodo } from "./todoFactory.js";
import { loadHome } from "./home.js";
import { editToDo } from "./edit.js";



//Project
export function loadProject(projectNumber) {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";

    if (!projectNumber) {
        projectNumber = localStorage.getItem("currentProject") ? parseInt(localStorage.getItem("currentProject")) : 1;
    }

    localStorage.setItem("currentProject", projectNumber);

    // Variables
    const toDoSection = document.createElement("section");

    const projectSection = document.createElement("div");

    const projectName = document.createElement("h1"); 

    const deleteProjectButton = document.createElement("button");

    const toDoCreateButton = document.createElement("button");

    const toDoForm = document.createElement("div");

    const formTitleDiv = document.createElement("div");
    const formDescriptionDiv = document.createElement("div");
    const formDueDateDiv = document.createElement("div");
    const formPriorityDiv = document.createElement("div");

    const titleLabel = document.createElement("label");
    const descriptionLabel = document.createElement("label");
    const dueDateLabel = document.createElement("label");
    const priorityLabel = document.createElement("label");

    const titleInput = document.createElement("input");
    const descriptionInput = document.createElement("input");
    const dueDateInput = document.createElement("input");
    const priorityInput = document.createElement("select");
    const priorityLow = document.createElement("option");
    const priorityMedium = document.createElement("option");
    const priorityHigh = document.createElement("option");

    const submitTodoBtn = document.createElement("button");

    
    

    // Setting attributes
    toDoSection.setAttribute("id", "toDoSection");

    projectSection.setAttribute("id", "projectSection");

    projectName.innerHTML = `Project ${projectNumber}`;
    projectName.classList.add("text");

    deleteProjectButton.setAttribute("id", "deleteProjectButton");
    deleteProjectButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    toDoCreateButton.setAttribute("id", "toDoCreateButton");
    toDoCreateButton.textContent = "Add";

    toDoForm.classList.add("form");

    titleLabel.setAttribute("for", "title");
    titleLabel.textContent = "Title:";

    descriptionLabel.setAttribute("for", "description");
    descriptionLabel.textContent = "Description:";

    dueDateLabel.setAttribute("for", "dueDate");
    dueDateLabel.textContent = "Due date:";

    priorityLabel.setAttribute("for", "priority");
    priorityLabel.textContent = "Priority:";

    titleInput.classList.add("styled-input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("id", "title");

    descriptionInput.classList.add("styled-input");
    descriptionInput.setAttribute("type", "text");
    descriptionInput.setAttribute("name", "description");
    descriptionInput.setAttribute("id", "description");

    dueDateInput.classList.add("styled-input");
    dueDateInput.setAttribute("type", "date");
    dueDateInput.setAttribute("name", "dueDate");
    dueDateInput.setAttribute("id", "dueDate");

    priorityInput.classList.add("styled-input");
    priorityInput.setAttribute("name", "priority");
    priorityInput.setAttribute("id", "priority");
    priorityHigh.setAttribute("value", "high");
    priorityMedium.setAttribute("value", "medium");
    priorityLow.setAttribute("value", "low");
    priorityLow.textContent = "Low";
    priorityMedium.textContent = "Medium";
    priorityHigh.textContent = "High";

    submitTodoBtn.setAttribute("id", "submitTodoBtn");
    submitTodoBtn.textContent = "Create";


    // Appending to DOM
    content.appendChild(toDoSection);

    projectSection.appendChild(projectName);
    projectSection.appendChild(deleteProjectButton);

    toDoSection.appendChild(projectSection);
    toDoSection.appendChild(toDoCreateButton);
    toDoSection.appendChild(toDoForm);

    toDoForm.appendChild(formTitleDiv);
    toDoForm.appendChild(formDescriptionDiv);
    toDoForm.appendChild(formDueDateDiv);
    toDoForm.appendChild(formPriorityDiv);
    toDoForm.appendChild(submitTodoBtn);

    formTitleDiv.appendChild(titleLabel);
    formTitleDiv.appendChild(titleInput);
    formDescriptionDiv.appendChild(descriptionLabel);
    formDescriptionDiv.appendChild(descriptionInput);
    formDueDateDiv.appendChild(dueDateLabel);
    formDueDateDiv.appendChild(dueDateInput);
    formPriorityDiv.appendChild(priorityLabel);
    formPriorityDiv.appendChild(priorityInput);
    priorityInput.appendChild(priorityLow);
    priorityInput.appendChild(priorityMedium);
    priorityInput.appendChild(priorityHigh);
    
    //Should write like this next time
    const todoDone = document.createElement("div");
    todoDone.id = "todoDone";
    toDoSection.appendChild(todoDone);

    const td = document.createElement("div");
    td.id = "td";
    todoDone.appendChild(td);

    const tdTitle = document.createElement("div");
    tdTitle.id = "tdTitle";
    tdTitle.textContent = "To do";
    td.appendChild(tdTitle);

    const toDos = document.createElement("ul");
    toDos.id = "toDos";
    td.appendChild(toDos);

    const todoItems = [];

    todoItems.forEach((item) => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = item.text;
        li.appendChild(span);

        const editButton = document.createElement("button");
        editButton.classList.add("editTdBtn");
        editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
        li.appendChild(editButton);
        editButton.addEventListener("click", editToDo(todo.id, projectNumber));

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteTdBtn");
        deleteButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        li.appendChild(deleteButton);

        toDos.appendChild(li);
    });


    const dn = document.createElement("div");
    dn.id = "dn";
    todoDone.appendChild(dn);

    const dnTitle = document.createElement("div");
    dnTitle.id = "dnTitle";
    dnTitle.textContent = "Done";
    dn.appendChild(dnTitle);

    const dones = document.createElement("ul");
    dones.id = "dones";
    dn.appendChild(dones);

    const doneItems = [];

    doneItems.forEach((item) => {
        const li = document.createElement("li");
        li.classList.add("checked")

        const span = document.createElement("span");
        span.textContent = item.text;
        li.appendChild(span);

        const editButton = document.createElement("button");
        editButton.classList.add("editTdBtn");
        editButton.classList.add("icon-green");
        editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
        li.appendChild(editButton);
        editButton.addEventListener("click", (editToDo(todo.id, projectNumber)));

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteTdBtn");
        deleteButton.classList.add("icon-green");
        deleteButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        li.appendChild(deleteButton);

        dones.appendChild(li);
    });

    // Assigning buttons

    // Display form
    toDoCreateButton.addEventListener("click", () => {
      toDoForm.style.display = "block";
    });

    const todos = [];

    // Submit new task

    submitTodoBtn.addEventListener("click", () => {
        if(titleInput.value === "") {
            alert("Missing title value!");
            return;
        }

        const newTodo = createTodo(
            titleInput.value,
            dueDateInput.value,
            priorityInput.value,
            descriptionInput.value
        );

        newTodo.id = Date.now();

        todos.push(newTodo);
        saveTodos(projectNumber);

        renderTodos();
        titleInput.value = "";
        descriptionInput.value = "";
        dueDateInput.value = "";
        priorityInput.value = "medium";
    });

    function renderTodos() {
        toDos.innerHTML = "";
        todos.forEach((todo, index) => {
            const li = document.createElement("li");

            const taskSpan = document.createElement("span");
            taskSpan.textContent = todo.title;

            const editButton = document.createElement("button");
            editButton.classList.add("editTdBtn");
            editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
            editButton.addEventListener("click", () => editToDo(todo.id, projectNumber));

            const deleteButton = document.createElement("button");
            deleteButton.classList.add("deleteTdBtn");
            deleteButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';

            deleteButton.addEventListener("click", () => {
                const listItem = findParentListItem(event.target);
                const taskText = listItem.querySelector("span").textContent;

                const todoIndex = todos.findIndex(todo => todo.title === taskText);
                if (todoIndex !== -1) {
                    todos.splice(todoIndex, 1);
                    saveTodos();
                    renderTodos();
                }
                
                todos.splice(index, 1);
                saveTodos(projectNumber);
                renderTodos();
            });

            li.appendChild(taskSpan);
            li.appendChild(editButton);
            li.appendChild(deleteButton);
            toDos.appendChild(li);
        });
    };

    function saveTodos(projectNumber) {
        localStorage.setItem(`project_${projectNumber}_todos`, JSON.stringify(todos));
    };

    function loadTodos() {
        const storedTodos = JSON.parse(localStorage.getItem(`project_${projectNumber}_todos`));
        if (storedTodos) {
            todos.push(...storedTodos);
        }
    };

    function findParentListItem(element) {
        while (element && element.tagName !== "LI") {
            element = element.parentElement;
        }
        return element;
    }

    // Check/uncheck tasks
    toDos.addEventListener("click", (event) => {
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

            if (toDos.contains(listItem)) {
                toDos.removeChild(listItem);
                dones.appendChild(listItem);
            }
        }
    });

    dones.addEventListener("click", (event) => {
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
            if (dones.contains(listItem)) {
                dones.removeChild(listItem);
                toDos.appendChild(listItem);
            }
        }
    });

    function deleteProject() {
        localStorage.removeItem(`project_${projectNumber}`);

        const projectButton = document.querySelector(`.nav-links a[href='#']:has(.fa-rocket)`);
        if (projectButton) {
            projectButton.parentElement.remove();
        }

        loadHome();
    }

    deleteProjectButton.addEventListener("click", (event) => {
        event.preventDefault();
        const confirmDelete = confirm(`Are you sure you want to delete Project ${projectNumber}?`);
        if (confirmDelete) {
            deleteProject();
        }
    });

    loadTodos();
    renderTodos();

};