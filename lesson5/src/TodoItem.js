import React from 'react';

const TodoItem = ({ task, onToggleComplete, onDeleteTask }) => {
  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      
      <span className="task-complete-symbol" onClick={() => onToggleComplete(task.id)}>
        {task.completed && <span>✔</span>}
      </span>
      
      <span onClick={() => onToggleComplete(task.id)} className="task-text">
        {task.text}
      </span>

      <button className="delete-button" onClick={() => onDeleteTask(task)}>X</button>
    </div>
  );
};

export default TodoItem;
