document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('addTaskBtn').addEventListener('click', function () {
        addTask();
    });
    document.getElementById('showAllBtn').addEventListener('click', function () {
        showAllTasks();
    });

    document.getElementById('showCompletedBtn').addEventListener('click', function () {
        showCompletedTasks();
    });

    document.getElementById('showIncompleteBtn').addEventListener('click', function () {
        showIncompleteTasks();
    });

    function addTask() {
        var taskInput = document.getElementById("taskInput").value;
        if (taskInput.trim() !== "") {
            var taskList = document.getElementById("taskList");
            var listItem = document.createElement("li");
            listItem.className = "taskItem";

            var taskText = document.createTextNode(taskInput);
            listItem.appendChild(taskText);

            var buttonsContainer = document.createElement("div");
            buttonsContainer.className = "buttons-container";

            var completeButton = document.createElement("button");
            completeButton.className = "completeTaskBtn";
            completeButton.appendChild(document.createTextNode("Completar"));
            completeButton.addEventListener('click', function () {
                completeTask(listItem, completeButton);
            });

            var deleteButton = document.createElement("button");
            deleteButton.className = "deleteTaskBtn";
            deleteButton.appendChild(document.createTextNode("Eliminar"));
            deleteButton.addEventListener('click', function () {
                removeTask(listItem);
            });

            buttonsContainer.appendChild(completeButton);
            buttonsContainer.appendChild(deleteButton);

            listItem.appendChild(buttonsContainer);
            taskList.appendChild(listItem);

            document.getElementById("taskInput").value = "";
        }
    }

    function removeTask(taskItem) {
        var taskList = document.getElementById("taskList");
        taskList.removeChild(taskItem);
    }

    function completeTask(taskItem, completeButton) {
        // Cambiar estilos del botón
        completeButton.classList.toggle("completed");

        // Puedes realizar otras acciones si lo necesitas
    }
    function showAllTasks() {
        var tasks = document.querySelectorAll('.taskItem');
        tasks.forEach(function (task) {
            task.style.display = 'flex';
        });
    }

    function showCompletedTasks() {
        var completedTasks = document.querySelectorAll('.taskItem .completeTaskBtn.completed');
        var incompleteTasks = document.querySelectorAll('.taskItem .completeTaskBtn:not(.completed)');
    
        // Oculta tareas incompletas
        incompleteTasks.forEach(function (task) {
            task.closest('.taskItem').style.display = 'none';
        });
    
        // Muestra tareas completadas
        completedTasks.forEach(function (task) {
            task.closest('.taskItem').style.display = 'flex';
        });
    }

    function showIncompleteTasks() {
        var completedTasks = document.querySelectorAll('.taskItem .completeTaskBtn.completed');
        var incompleteTasks = document.querySelectorAll('.taskItem .completeTaskBtn:not(.completed)');
    
        // Oculta tareas completadas
        completedTasks.forEach(function (task) {
            task.closest('.taskItem').style.display = 'none';
        });
    
        // Muestra tareas incompletas
        incompleteTasks.forEach(function (task) {
            task.closest('.taskItem').style.display = 'flex';
        });
    }
});