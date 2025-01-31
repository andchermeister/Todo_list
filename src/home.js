// HOME
export function loadHome() {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";

    const title = document.createElement("h1");

    title.innerHTML = "Choose a project to create new tasks"
    title.classList.add("text")

    content.appendChild(title);
};