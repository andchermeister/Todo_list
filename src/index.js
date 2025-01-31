import "./styles.css"
import { loadHome } from './home.js';
import { loadProject } from './project.js';

loadHome();

const homeBtn = document.querySelector(".nav-links a[href='#']:has(.fa-house)");
const newBtn = document.querySelector(".nav-links a[href='#']:has(.fa-plus)");
const projectBtns = document.querySelectorAll(".nav-links a[href='#']:has(.fa-rocket)");
const reloadBtn = document.querySelector(".nav-links a[href='#']:has(.fa-rotate-right)");
let projectCounter = localStorage.getItem("projectCounter") ? parseInt(localStorage.getItem("projectCounter")) : 1;
const menuLinks = document.querySelector(".menu-links");

if (homeBtn) {
    homeBtn.addEventListener("click", (event) => {
        event.preventDefault();
        loadHome();
    });
}

function createProjectButton(projectNumber) {

    if (!menuLinks) return;

    const li = document.createElement("li");
    li.classList.add("nav-links");

    const a = document.createElement("a");
    a.href = "#";

    const i = document.createElement("i");
    i.classList.add("fa-solid", "fa-rocket", "icon");

    const span = document.createElement("span");
    span.classList.add("text", "nav-text");
    span.innerHTML = `Project ${projectNumber}`;

    li.appendChild(a);
    a.appendChild(i);
    a.appendChild(span);
    menuLinks.appendChild(li);

    localStorage.setItem(`project_${projectNumber}`, `Project ${projectNumber}`);

    a.addEventListener("click", (event) => {
        event.preventDefault();
        loadProject(projectNumber);
    });
}

function loadStoredProjects() {
    for (let i = 1; i < projectCounter; i++) {
        const projectData = localStorage.getItem(`project_${i}`);
        if (projectData) {
            createProjectButton(i);
        }
    }
}

loadStoredProjects();

if (newBtn) {
    newBtn.addEventListener("click", (event) => {
        event.preventDefault();

        const existingProjects = menuLinks.querySelectorAll(".nav-links a[href='#']:has(.fa-rocket)").length;
        if (existingProjects >= 7) {
            alert("You can only have maximum of 7 projects.");
            return;
        }

        createProjectButton(projectCounter);
        localStorage.setItem(`project_${projectCounter}`, projectCounter);
        
        projectCounter++;
        localStorage.setItem("projectCounter", projectCounter);
    });
}

if (projectBtns) {
    projectBtns.forEach((btn, index) => {
        btn.addEventListener("click", (event) => {
            event.preventDefault();
            loadProject(index + 1);
        });
    });
}

if (reloadBtn) {
    reloadBtn.addEventListener("click", (event) => {
        event.preventDefault();
        localStorage.clear();
        location.reload();
    });
}

// SIDEBAR
const body = document.querySelector("body"),
        sidebar = body.querySelector(".sidebar"),
        toggle = body.querySelector(".toggle"),
        modeSwitch = body.querySelector(".toggle-switch"),
        modeText = body.querySelector(".mode-text");

        toggle.addEventListener("click", () => {
            sidebar.classList.toggle("close");
        });

        modeSwitch.addEventListener("click", () => {
            body.classList.toggle("dark");

            if(body.classList.contains("dark")){
                modeText.innerHTML = "Light Mode";
            } else {
                modeText.innerHTML = "Dark Mode";
            }
        });