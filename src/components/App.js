import React, { useState } from 'react';
import Input from './Input';
import '../styles/App.css';


// let tasksArr = [];

const App = () => {


  // const [tasks, setTasks] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [taskId, setTaskId] = useState(0);
  const [taskDate, setTaskDate] = useState('');
  const [taskBody, setTaskBody] = useState('');
  // const [taskStatus, setTaskStatus] = useState(true)


  const handleInputChange = e => {

    if (e.target.name === 'task') {

      setTaskBody(e.target.value)
    } else if (e.target.name === 'date') {

      setTaskDate(e.target.value)

    }
  }

  const handleInputSubmit = e => {
    e.preventDefault();
    setTaskId(tasks.length + 1)
    setTasks(task => task.concat(
      {
        id: taskId,
        date: taskDate,
        body: taskBody,
        status: true
      }))
    setTaskDate('');
    setTaskBody('');

  }

  const handleTaskStatus = (id) => (
    setTasks(tasks.map(task => {
      if (task.id === id) {
        task = { id: task.id, date: task.date, body: task.body, status: false };
      }
      return task;
    }
    )))

  const handleDelete = id => {
    const newList = tasks.filter(task => task.id !== id);
    setTasks(newList);
  }


  const toDoList = tasks.length ? tasks.map(task => {
    if (task.status === true) {
      return (
        <table>
          <tr>
            <td>{task.id}</td>
            <td>{task.date}</td>
            <td>{task.body}</td>
            <button onClick={() => handleTaskStatus(task.id)}>Done</button>
          </tr>
        </table>
      )
    } else {return null}
  }) : null;

  const finishedTasks = tasks.filter(task => task.status === false);

  const finishedTasksList = finishedTasks.length ? finishedTasks.map(task => (
    <table>
      <tr>
        <td>{task.id}</td>
        <td>{task.date}</td>
        <td>{task.body}</td>
        <button onClick={() => handleDelete(task.id)}>Delete</button>
      </tr>
    </table>
  )) : null;


  return (
    <>
      <Input
        onChange={handleInputChange}
        onSubmit={handleInputSubmit}
        taskValue={taskBody}
        dateValue={taskDate}
      />
      {toDoList}
      <p>-----------------------</p>
      {finishedTasksList}

    </>
  )

}

export default App;
