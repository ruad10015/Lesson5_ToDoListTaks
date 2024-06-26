import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, onToggleComplete, onDeleteTask }) => {
  return (
    <div className="todo-list">
      {tasks.map(task => (
        <TodoItem 
          key={task.id} 
          task={task} 
          onToggleComplete={onToggleComplete} 
          onDeleteTask={onDeleteTask} 
        />
      ))}
    </div>
  );
};

export default TodoList;
