import React from "react";
import TodoItem from "./TodoItem";
import TodoButton from "./TodoButton";

function TodoList() {
    const [tasks, setTasks] = React.useState(["Tarea 1", "Tarea 2", "Vamooos", "Funciona"]);

    return (
        <div>
        <h2>Mi lista de Tareas</h2>
        <TodoButton></TodoButton>
        <ul>
            {tasks.map((task, index) => (
                <TodoItem key={index} content={task} />
            ))}
        </ul>
        </div>
    );
}
export default TodoList;