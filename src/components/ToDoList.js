import React from 'react';

import Task from './Task';


const ToDoList = ({ tasks, click }) => {

    const toDoList = tasks.length
        ? tasks.map(task => {
            if (task.status === true) {
                return (
                    <tr key={task.id}>
                        <Task
                            task={task}
                            click={(id) => click(id)}
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
                        <th>data utworzenia</th>
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