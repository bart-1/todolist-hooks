import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import Task from './Task';

import '../styles/ToDoList.scss';


const ToDoList = () => {
    const { tasks } = useContext(AppContext);

    const toDoList = tasks.length
        ? tasks.map(task => {
            if (task.status === true) {
                return (
                    <tr key={task.id}>
                        <Task
                            task={task}
                        />
                    </tr>
                )
            } else { return null }
        })
        : null;
    return (
        <>
            <table id="to-do">
                <caption>
                    Zadania do zrobienia
                </caption>
                <thead>
                    <tr>
                        <th>termin wykonania</th>
                        <th>zadanie</th>
                        <th>usuń</th>
                    </tr>
                </thead>
                <tbody>
                    {toDoList}
                </tbody>
            </table>
        </>
    );
};

export default ToDoList;