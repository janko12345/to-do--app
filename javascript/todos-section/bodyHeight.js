let todo = document.querySelector(".todo");
let title = todo.querySelector(".todo-title");
let body = todo.querySelector(".todo-body");
let footer = todo.querySelector(".todo-footer");


/* computing needed height for .todo-body element */

// computed styles
let todoCS = getComputedStyle(todo);
let titleCS = getComputedStyle(title);
let bodyCS = getComputedStyle(body);
let footerCS = getComputedStyle(footer);

let todoHeight = parseFloat(todoCS.height);
let todoVertP = parseFloat(todoCS.paddingTop) + parseFloat(todoCS.paddingBottom);

let todoAvailHeight = todoHeight - todoVertP;
let titleHeight = parseFloat(titleCS.height);
let footerHeight = parseFloat(footerCS.height);
let bodyFontSize = parseFloat(bodyCS.fontSize);
let bodyLineHeight = bodyCS.lineHeight === "normal" ? 1.15 * bodyFontSize : parseFloat(bodyCS.lineHeight);

let leftSpaceForBody = todoAvailHeight - titleHeight - footerHeight;
let lastLineClipped = leftSpaceForBody % bodyLineHeight;

let bodyHeight = leftSpaceForBody - lastLineClipped - bodyFontSize / 4;

body.style.height = bodyHeight + "px";

