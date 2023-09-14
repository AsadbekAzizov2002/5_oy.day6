const form = document.querySelector(".form");
const input = document.querySelector(".input");
const box = document.querySelector('.box');

let todo = []

const render = () => {
    box.innerHTML = todo.map((item) =>
        `
    <p>${item.name}</p>
    <buttom onclick="deleteTodo(${item.id})">delete</buttom>
    <buttom onclick="editTodo(${item.id})">edit</buttom>
    `
    ).join("")
};

const deleteTodo = (id) => {
    todo = todo.filter((item) => item.id != id);
    render();
};

const editTodo = (id) => {
    const NewValue = prompt('');
    todo = todo.map((obj) => obj.id === id ? { id, name: NewValue } : obj);
    render();
};

form.addEventListener('submit', (e) => {
    e.preventDefult();
    todo.push({ name: input.value, id: Date.now() })
    input.value = "";
    render();
});