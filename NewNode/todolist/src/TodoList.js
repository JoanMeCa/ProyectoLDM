import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newTask = { id, text };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const text = e.target.task.value;
          addTask(text);
          e.target.task.value = '';
        }}
      >
        <input type="text" name="task" placeholder="Nueva tarea" />
        <button type="submit">Agregar tarea</button>
      </form>

      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} onDelete={deleteTask} />
      ))}
    </div>
  );
};

export default TodoList;