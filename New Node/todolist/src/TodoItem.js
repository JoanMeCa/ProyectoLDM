import React from 'react';

const TodoItem = ({ task, onDelete }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-2">
      <span className="mr-3">{task.text}</span>
      <button className="btn btn-danger" onClick={() => onDelete(task.id)}>
        Eliminar
      </button>
    </div>
  );
};

export default TodoItem;