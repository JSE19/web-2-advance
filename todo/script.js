const taskInput = document.getElementById("task-input");
const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");



let tasks = JSON.parse(localStorage.getItem("tasks")) || [];




function renderTasks(sort = 'all') {


    taskList.innerHTML = "";
    let filterList = tasks;
    if (sort === "completed") filterList = tasks.sort((task) => task.completed)
    if (sort === "pending") filterList = tasks.sort((task) => !task.completed)


    filterList.forEach(task => {
        const li = document.createElement("li");

        li.innerHTML = `<div>
        <span class="${task.completed ? "line-through" : ""}">${task.text}</span>
         <button
          onclick="toggleTask(${task.id})">
         ${task.completed ? "Undo" : "completed"}
        </button> 
        
        <button
          onclick="deleteTask(${task.id})">
             Delete
        </button> 
        </div>`
        taskList.appendChild(li);

    })

}

taskForm.addEventListener("submit", e => {
    e.preventDefault();

    const text = taskInput.value.trim();

    if (text) {
        const task = {
            id: Date.now(),
            text,
            completed: false
        }

        tasks.push(task)

        localStorage.setItem('tasks', JSON.stringify(tasks))


        // clear the input 
        taskInput.value = "";
        renderTasks();

    }
})


function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id)
    localStorage.setItem('tasks', JSON.stringify(tasks));

    renderTasks();

}


function toggleTask(id) {
    tasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task)
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}