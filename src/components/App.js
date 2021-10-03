import React from 'react';

import FinishedTasksList from './FinishedTasksList';
import Input from './Input';
import MainProvider from './AppContext';
import ToDoList from './ToDoList';

import '../styles/App.scss';

const App = () => {

  return (
    <div className="app">
      <div className="app-header">
        <span><strong>My ToDoList</strong></span>
      </div>
      <div className="app-body">
        <MainProvider>
          <Input />
          <ToDoList />
          <FinishedTasksList />
        </MainProvider>
      </div>
      <div className="app-footer"></div>
    </div>
  )
}

export default App;
