import { loadProject } from "./project";

export function editToDo(todoID, projectNumber) {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";

    const editContainer = document.createElement("div");
    editContainer.setAttribute("id", "editContainer");
    content.appendChild(editContainer);

    const header = document.createElement("section");
    header.setAttribute("id", "editHeader");
    header.classList.add("text");
    editContainer.appendChild(header);

    const title = document.createElement("h1");
    title.setAttribute("id", "editTitle");
    title.innerHTML = "Edit To-do"
    title.classList.add("text");
    header.appendChild(title);

    const editSection = document.createElement("section");
    editSection.setAttribute("id", "editSection");
    editContainer.appendChild(editSection);

    const titleDateContainer = document.createElement("div");
    titleDateContainer.setAttribute("id", "titleDateContainer");
    editSection.appendChild(titleDateContainer);

    // Fetch the todo from localStorage using the ID

    const todos = JSON.parse(localStorage.getItem(`project_${projectNumber}_todos`)) || [];
    const todoToEdit = todos.find(todo => todo.id === todoID);

    // TO-DO TITLE

    if (todoToEdit) {
        const todoTitle = document.createElement("h1");
        todoTitle.innerHTML = "Title: "
        todoTitle.setAttribute("id", "todoTitle");
        todoTitle.classList.add("text")
        titleDateContainer.appendChild(todoTitle);

        const todoTitleInput = document.createElement("input");
        todoTitleInput.value = todoToEdit.title;
        todoTitleInput.setAttribute("id", "todoTitleInput");
        titleDateContainer.appendChild(todoTitleInput);

        // TO-DO DUE DATE

        const todoDueDate = document.createElement("h1");
        todoDueDate.innerHTML = "Due: "
        todoDueDate.setAttribute("id", "todoDueDate");
        todoDueDate.classList.add("text");
        titleDateContainer.appendChild(todoDueDate);

        const todoDueDateInput = document.createElement("input");
        todoDueDateInput.value = todoToEdit.dueDate;
        todoDueDateInput.setAttribute("id", "todoDueDateInput");
        todoDueDateInput.setAttribute("type", "date");
        titleDateContainer.appendChild(todoDueDateInput);

        // SEPARATOR

        const separator1 = document.createElement("div");
        separator1.classList.add("separator");
        editSection.appendChild(separator1);

        // TO-DO PRIORITY

        const priorityContainer = document.createElement("div");
        priorityContainer.setAttribute("id", "priorityContainer");
        editSection.appendChild(priorityContainer);

        const todoPriority = document.createElement("h1");
        todoPriority.innerHTML = "Priority: ";
        todoPriority.setAttribute("id", "todoPriority");
        todoPriority.classList.add("text");

        const todoPriorityInput = document.createElement("select");
        todoPriorityInput.setAttribute("id", "todoPriorityInput");

        const priorityLow = document.createElement("option");
        priorityLow.value = "low";
        priorityLow.text = "Low";

        const priorityMedium = document.createElement("option");
        priorityMedium.value = "medium";
        priorityMedium.text = "Medium";

        const priorityHigh = document.createElement("option");
        priorityHigh.value = "high";
        priorityHigh.text = "High";

        todoPriorityInput.appendChild(priorityLow);
        todoPriorityInput.appendChild(priorityMedium);
        todoPriorityInput.appendChild(priorityHigh);

        todoPriorityInput.value = todoToEdit.priority;
        priorityContainer.appendChild(todoPriority);
        priorityContainer.appendChild(todoPriorityInput);

        // SEPARATOR

        const separator2 = document.createElement("div");
        separator2.classList.add("separator");
        editSection.appendChild(separator2);

        //  TO-DO DESCRIPTION

        const todoDescription = document.createElement("h3");
        todoDescription.innerHTML = "Description:"
        todoDescription.setAttribute("id", "todoDescription");
        todoDescription.classList.add("text");
        editSection.appendChild(todoDescription);

        const descriptionTextField = document.createElement("textarea");
        descriptionTextField.value = todoToEdit.description;
        descriptionTextField.setAttribute("id", "descriptionTextField");
        descriptionTextField.classList.add("text");
        editSection.appendChild(descriptionTextField);

        // Save and Switch mode buttons

        const saveBtn = document.createElement("button");
        saveBtn.setAttribute("id", "saveBtn");
        saveBtn.innerHTML = "Save";
        saveBtn.addEventListener("click", () => {
            todoToEdit.title = todoTitleInput.value;
            todoToEdit.dueDate = todoDueDateInput.value;
            todoToEdit.priority = todoPriorityInput.value;
            todoToEdit.description = descriptionTextField.value;

            const index = todos.findIndex(todo => todo.id === todoToEdit.id);
            if (index !== -1) {
                todos[index] = todoToEdit;
                localStorage.setItem(`project_${projectNumber}_todos`, JSON.stringify(todos));
            }

            loadProject(projectNumber);
        });
        editSection.appendChild(saveBtn);

    }
}