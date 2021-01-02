let addProjectBtn = document.querySelector(".add-project-btn");
let projInp = addProjectBtn.querySelector("input");
let projects = document.querySelector(".projects");
let projectsContainer = document.querySelector(".projects-container");
let lastActive;
let menuBar = document.querySelector(".menu-bar");
let lastActiveBtn = document.querySelector(".menu-btn");
let todosToggler = document.querySelector(".show-todos-toggler");

// show input
addProjectBtn.addEventListener("click", e =>{
    addProjectBtn.classList.add("add-project-active");
    projectsContainer.classList.add("projects-container-active");
    setTimeout(() => {
        projInp.focus();
    }, 1000);
});

// hide input on click
window.addEventListener("click", e=>{
    if(e.target.closest(".add-project-btn") === null){
        if(projInp.value.trim() === "" && addProjectBtn.classList.contains("add-project-active") && !lastActive){
            projectsContainer.classList.remove("projects-container-active");
        }
        projInp.value = "";
        addProjectBtn.classList.remove("add-project-active")

    }
})


// adding element
projInp.addEventListener("keyup", e=>{
    if (e.key !== "Enter" || !projInp.value.trim())
        return;

    addProjectBtn.classList.remove("add-project-active");
    let project = document.createElement("div");
    let dltBtn = document.createElement("span");
    let name = document.createElement("span");
    let info = document.createElement("span");

    project.classList.add("project");
    dltBtn.classList.add("project-delete-btn");
    name.classList.add("project-name");
    info.classList.add("project-info");
    
    name.textContent = projInp.value.trim();
    info.textContent = " (0 todos, 0 upcoming)";

    project.appendChild(dltBtn);
    project.appendChild(name);
    project.appendChild(info);

    projects.appendChild(project)

    projInp.value = "";
    project.click();
    project.scrollIntoView();
    lastActive = project;
})




projects.addEventListener("click", e=>{
    let clickedProject = e.target.closest(".project");
    
    // if there was clicked any element before, strip down its highlight
    if(lastActive){
        lastActive.classList.remove("project-active");
    }

    // if clicked the same project, then todos section visibility should be toggled, only if it is visible and finish event
    if(lastActive === clickedProject){
        lastActive = undefined;
        projectsContainer.classList.remove("projects-container-active");
        if(!todosSection.classList.contains("todos-section-hidden")){
            todosToggler.click();
        }
        return;

        // if it is not the same project, then the new one should be highlighted and todos section visibility should be toggled only if it is hidden
    } else{
        clickedProject.classList.add("project-active");
        projectsContainer.classList.add("projects-container-active");
        if(todosSection.classList.contains("todos-section-hidden")){
            todosToggler.click();
        }
        lastActive = clickedProject;
    }

})

menuBar.addEventListener("click", e=>{
    let menuBtn = e.target.closest(".menu-btn");
    if(!menuBtn || menuBtn === lastActiveBtn){
        return;
    }
    lastActiveBtn.classList.remove("menu-btn-active");
    menuBtn.classList.add("menu-btn-active");

    lastActiveBtn = menuBtn
})


