import React, { useState, useEffect } from 'react';

import FinishedTasksList from './FinishedTasksList';
import Input from './Input';
import ToDoList from './ToDoList';

import '../styles/App.css';

const App = () => {

  const [tasks, setTasks] = useState([]);
  const [actualDate, setActualDate] = useState('');
  const [rangeDate, setRangeDate] = useState('');
  const [taskBody, setTaskBody] = useState('');

  useEffect(() => {
    function getDate(addYears) {
      const now = Date.now();
      const time = new Date(now);
      return (
        time.getUTCFullYear() + addYears + '-'
        + ('0' + (time.getMonth() + 1)).slice(-2) + '-'
        + ('0' + (time.getDay() - 4)).slice(-2) + 'T'
        + ('0' + time.getHours()).slice(-2) + ':'
        + ('0' + time.getMinutes()).slice(-2)
      );
    }
    const actualDate = getDate(0);
    const rangeDate = getDate(2);
    console.log(actualDate)
    setActualDate(actualDate)
    setRangeDate(rangeDate)

  }, [taskBody])

  const handleInputChange = e => {
    if (e.target.name === 'task') {
      setTaskBody(e.target.value)
    } else if (e.target.name === 'date') {
      setActualDate(e.target.value)
    }
  }

  const handleInputSubmit = e => {
    e.preventDefault();
    setTasks(task => task.concat({
      id: tasks.length + 1,
      date: actualDate,
      body: taskBody,
      status: true
    }))
    setActualDate('');
    setTaskBody('');
  }

  const handleTaskStatus = id => (
    setTasks(tasks.map(task => {
      if (task.id === id) {
        task = {
          id: task.id,
          date: task.date,
          body: task.body,
          status: false
        };
      }
      return task;
    }
    )))

  const handleDelete = id => {
    const newList = tasks.filter(task => task.id !== id);
    setTasks(newList);
  }

  return (
    <div className="app">
      <Input
        onChange={handleInputChange}
        onSubmit={handleInputSubmit}
        taskValue={taskBody}
        dateValue={actualDate}
        rangeDate={rangeDate}
      />
      <ToDoList
        tasks={tasks}
        click={(id) => handleTaskStatus(id)}
      />
      <FinishedTasksList
        actualDate={actualDate}
        tasks={tasks}
        click={(id) => handleDelete(id)}
      />
    </div>
  )
}

export default App;
