import React, { useState } from 'react';
import './styles.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
      <>
      <div className="background-image"></div>
      <div className="container">
      <div className="header">
        <h1>Todo List React JS</h1>
        <div>
          <input
            type="text"
            id="newTaskInput"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Tarefa" />
          <button onClick={addTask} disabled={!newTask.trim()}>
            ADICIONAR
          </button>
        </div>
      </div>
      <div className="task-list">
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div></>
  
  );
}

export default App;
