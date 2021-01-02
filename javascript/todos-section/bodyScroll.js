let todosContainer = document.querySelector(".todos-container");
let todoBody = document.querySelector(".todo-body");
let bodyPar = todoBody.querySelector("p");

if(todoBody.scrollHeight > todoBody.clientHeight){
    let expandEl = document.createElement("span");
    expandEl.classList.add("todo-body-expand");
    expandEl.textContent = "more...";
    todoBody.appendChild(expandEl);

    let lowerEl = document.createElement("span");
    lowerEl.classList.add("todo-body-lower");
    lowerEl.textContent = " less";
    bodyPar.appendChild(lowerEl);
}

todosContainer.addEventListener("click", e=>{
    if(e.target.classList.contains("todo-body-expand")){
        let currentBody = e.target.closest(".todo-body");
        
        e.target.style.display = "none";
        currentBody.style.overflowY = "auto";
    }
    else if(e.target.classList.contains("todo-body-lower")){
        let currentBody = e.target.closest(".todo-body");
        let expandEl = currentBody.querySelector(".todo-body-expand");

        currentBody.scrollTo(0,0);
        currentBody.style.overflowY = "hidden";
        expandEl.style.display = "revert";
    }
})