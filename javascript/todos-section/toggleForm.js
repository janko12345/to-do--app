let addTodo = document.querySelector(".add-todo");
let todoFormModal = document.querySelector(".todo-form-modal");
let submitBtn = todoFormModal.querySelector(".todo-form-submit-btn");

addTodo.addEventListener("click", e=>{
    todoFormModal.classList.add("todo-form-modal-opened");
});

todoFormModal.addEventListener("click", e=>{
    if(!e.target.classList.contains("todo-form-modal"))
        return;

    todoFormModal.classList.remove("todo-form-modal-opened");
});

submitBtn.addEventListener("click", e=>{
    e.preventDefault();
    todoFormModal.classList.remove("todo-form-modal-opened");
});
