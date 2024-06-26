import React, { useState } from 'react';
import TodoList from './TodoList';
import ConfirmDialog from './ConfirmDialog';
import './App.css'; 

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Write Code', completed: true },
    { id: 2, text: 'Read Book', completed: false },
  ]);

  const [taskToDelete, setTaskToDelete] = useState(null);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    setTaskToDelete(null);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <div className="input-container">
        <input type="text" id="new-task" />
        <button onClick={() => {
          const input = document.getElementById('new-task');
          addTask(input.value);
          input.value = '';
        }}>ADD</button>
      </div>
      <TodoList tasks={tasks} onToggleComplete={toggleComplete} onDeleteTask={setTaskToDelete} />
      {taskToDelete && (
        <ConfirmDialog 
          task={taskToDelete} 
          onConfirm={() => deleteTask(taskToDelete.id)} 
          onCancel={() => setTaskToDelete(null)} 
        />
      )}
    </div>
  );
};

export default App;
