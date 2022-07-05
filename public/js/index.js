// Selecciono elementos del DOM
const todos = document.querySelectorAll(".todo");
const all_status = document.querySelectorAll(".status");
const d = document;

let draggableTodo = null;

todos.forEach((todo) => {
  todo.addEventListener("dragstart", dragStart);
  todo.addEventListener("dragend", dragEnd);
});

function dragStart() {
  draggableTodo = this;
  setTimeout(() => {
    this.style.display = "none";
  }, 0);
  console.log("dragStart");
}

function dragEnd() {
  draggableTodo = null;
  setTimeout(() => {
    this.style.display = "block";
  }, 0);
  console.log("dragEnd");
}

all_status.forEach((status) => {
  status.addEventListener("dragover", dragOver);
  status.addEventListener("dragenter", dragEnter);
  status.addEventListener("dragleave", dragLeave);
  status.addEventListener("drop", dragDrop);
});

function dragOver(e) {
  e.preventDefault();
}

function dragEnter() {
  this.style.border = "1px dashed #ccc";
  console.log("dragEnter");
}

function dragLeave() {
  this.style.border = "none";
  console.log("dragLeave");
}

function dragDrop() {
  this.style.border = "none";
  this.appendChild(draggableTodo);
  console.log("dropped");
}


const btns = d.querySelectorAll("[data-target-modal]");
const close_modals = d.querySelectorAll(".close-modal");
const overlay = d.getElementById("overlay");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    d.querySelector(btn.dataset.targetModal).classList.add("active");
    overlay.classList.add("active");
  });
});

close_modals.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
});

window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = d.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
  }
};

// Crear tarea
const todo_submit = d.getElementById("todo_submit");

todo_submit.addEventListener("click", createTodo);

function createTodo() {
  const todo_div = d.createElement("div");
  const input_val = d.getElementById("todo_input").value;
  const txt = d.createTextNode(input_val);

  if (input_val) {
    todo_div.appendChild(txt);
    todo_div.classList.add("todo");
    todo_div.setAttribute("draggable", "true");

  } else {
    return alert("No ha introducido nada")
  }

  const span = d.createElement("span");
  const span_txt = d.createTextNode("\u00D7");
  span.classList.add("close");
  span.appendChild(span_txt);
  
  todo_div.appendChild(span);
  
  no_status.appendChild(todo_div);
  
  span.addEventListener("click", () => {
    span.parentElement.style.display = "none";
  });
  
  todo_div.addEventListener("dragstart", dragStart);
  todo_div.addEventListener("dragend", dragEnd);
  
  d.getElementById("todo_input").value = "";
  todo_form.classList.remove("active");
  overlay.classList.remove("active");


  //localstorage 
  

}

const close_btns = d.querySelectorAll(".close");

close_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
  });
});