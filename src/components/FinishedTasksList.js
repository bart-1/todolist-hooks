import React from 'react';

import Task from './Task';

const FinishedTasksList = ({ tasks, click, actualDate }) => {

    const finishedTasks = tasks.filter(task => task.status === false);
    
    const finishedTasksList = finishedTasks.length
        ? finishedTasks.map(task => (
            <tr key={task.id}>
                <Task
                    actualDate={actualDate}
                    task={task}
                    click={(id) => click(id)}
                />
            </tr>
        ))
        : null;

    return (
        <>
            <table id="done">
                <caption>
                    Zadania zrobione
                </caption>
                <thead>
                    <tr>
                        <th>data utworzenia</th>
                        <th>data zakończenia</th>
                        <th>zadanie</th>
                        <th>usuń</th>
                    </tr>
                </thead>
                <tbody>
                    {finishedTasksList}
                </tbody>
            </table>
        </>
    );
};

export default FinishedTasksList;