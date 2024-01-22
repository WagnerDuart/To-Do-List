import React, { useState } from 'react';
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);


  const addTask = () => {
    if (newTask.trim() !== '') {
      if (editMode) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = newTask;
        setTasks(updatedTasks);
        setEditMode(false);
        setEditIndex(null);
        setShowModal(false)
      } else {
        setTasks([...tasks, newTask]);
      }
      setNewTask('');
    }else{
      setShowAlert(true);
    }
  };


  const editTask = (index) => {
    setNewTask(tasks[index]);
    setEditMode(true);
    setEditIndex(index);
    setShowModal(true);
  };


  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
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
              placeholder="Tarefa"
            />
            <button className="add-button" onClick={addTask} >
              ADICIONAR
            </button>
          </div>
        </div>
        <div className="task-list">
          <ul>
             {tasks.map((task, index) => (
              <li key={index} >
                  {task}            
                <div className="container-button">
                  <button className="edit-button" onClick={() => editTask(index)}>
                    <img id='icon-edit' src="https://cdn-icons-png.flaticon.com/128/6492/6492748.png" alt="Lápis" />
                  </button>
                  <button className="delete-button" onClick={() => deleteTask(index)}>
                    <img id='icon-delet' src="https://cdn-icons-png.flaticon.com/256/54/54324.png" alt="lixeira" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {showModal && (
          <div className="edit-modal-overlay">
            <div className="edit-modal">
              <span className="close" >
                <img title="Fechar" className='icon-X' src="https://cdn-icons-png.flaticon.com/128/54/54972.png" alt="Fechar" onClick={() => setShowModal(false)}/>
              </span>
              <div className="container-title">
                <h3>Editando Tarefa</h3>
              </div>
              <input
                placeholder='Tarefa'
                className="modal-input"
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <div className="container-modal-button">
                <button className="modal-button-save" onClick={addTask}>
                  Salvar
                </button>
              </div>
            </div>
          </div>
        )}
        {showAlert && (
          <div className="alert-modal-overlay">
            <div className="alert-modal">


              <span className="close" >
                <img title="Fechar" className='icon-X'src="https://cdn-icons-png.flaticon.com/128/54/54972.png" alt="Fechar" onClick={() => setShowAlert(false)}/>
              </span>


              <img id="img-alert" src="https://cdn-icons-png.flaticon.com/128/4418/4418877.png" alt="Alerta" />
              <p>O campo de entrada está vazio. Por favor, insira uma tarefa.</p>


              <button id="button-alert-close" onClick={() => setShowAlert(false)}>
                  Ok
              </button>
               
            </div>
          </div>
        )}
      </div>
    </>
  );
}


export default App;
