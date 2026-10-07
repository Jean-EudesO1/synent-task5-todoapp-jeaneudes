const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const emptyMessage = document.querySelector("#empty-message");
const statusMessage = document.querySelector("#status-message");


function updateEmptyMessage() {
    emptyMessage.hidden = taskList.children.length > 0;
}


function saveTasks() {
    const tasks = [];

    taskList.querySelectorAll(".task-item").forEach(function (taskItem) {
        const text = taskItem.querySelector("span").textContent;
        const completed = taskItem.querySelector("input").checked;

        tasks.push({
            text: text,
            completed: completed
        });
    });

    try {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
        statusMessage.textContent =
            "Impossible de sauvegarder les tâches dans ce navigateur.";
    }
}


function createTask(taskText, completed = false) {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");

    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completed;

    
    const taskLabel = document.createElement("label");
    taskLabel.classList.add("task-label");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    taskLabel.append(checkbox, taskSpan);

    
    taskItem.classList.toggle("completed", completed);

    
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Supprimer";
    deleteButton.classList.add("delete-button");

    
    checkbox.addEventListener("change", function () {
        taskItem.classList.toggle("completed", checkbox.checked);

        statusMessage.textContent = checkbox.checked
            ? "Tâche terminée."
            : "Tâche remise à faire.";

        saveTasks();
    });

    
    deleteButton.addEventListener("click", function () {
        taskItem.remove();
        updateEmptyMessage();

        statusMessage.textContent = "Tâche supprimée.";

        saveTasks();
        taskInput.focus();
    });

    
    taskItem.append(taskLabel, deleteButton);
    taskList.appendChild(taskItem);

    updateEmptyMessage();
}


function loadTasks() {
    try {
        const savedTasks = localStorage.getItem("tasks");
        const tasks = savedTasks ? JSON.parse(savedTasks) : [];

        
        if (
            !Array.isArray(tasks) ||
            !tasks.every(function (task) {
                return (
                    task !== null &&
                    typeof task === "object" &&
                    typeof task.text === "string" &&
                    typeof task.completed === "boolean"
                );
            })
        ) {
            throw new Error("Données de tâches invalides.");
        }

        
        tasks.forEach(function (task) {
            createTask(task.text, task.completed);
        });
    } catch (error) {
        statusMessage.textContent =
            "Impossible de récupérer les tâches enregistrées.";
    }

    updateEmptyMessage();
}


taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        statusMessage.textContent = "Écris une tâche avant de l’ajouter.";
        taskInput.focus();
        return;
    }

    createTask(taskText);

    statusMessage.textContent = "Tâche ajoutée.";
    saveTasks();

    taskInput.value = "";
    taskInput.focus();
});


loadTasks();