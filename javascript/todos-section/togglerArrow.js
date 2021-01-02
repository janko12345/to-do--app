let todosSection = document.querySelector(".todos-section")
let toggleTrigger = todosSection.querySelector(".show-todos-toggler");


toggleTrigger.addEventListener("click", e=>{
    let activeProject = document.querySelector(".project-active");
    toggleTrigger.classList.toggle("todos-toggler-active");
    if(todosSection.classList.toggle("todos-section-hidden") && activeProject){
        activeProject.classList.remove("project-active");
        activeProject.closest(".projects-container").classList.remove("projects-container-active");
    }
})