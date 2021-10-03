import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import Task from './Task';

import '../styles/FinishedTasksList.css';

const FinishedTasksList = () => {
    const { tasks } = useContext(AppContext);

    const sortedTask = tasks.sort((a, b) => {
        const dateA = a.date;
        const dateB = b.date;

        if (dateA < dateB) return 1;
        if (dateA > dateB) return -1;
        return 0;
    });
    const finishedTasks = sortedTask.filter(task => task.status === false);

    const finishedTasksList = finishedTasks.length
        ? finishedTasks.map(task => (
            <tr key={task.id}>
                <Task
                    task={task}
                />
            </tr>
        ))
        : null;

    return (
        <>
                <table className="done" id="sticky-caption">
                    <caption>
                        Zadania zrobione
                    </caption>
                </table>
            <table className="done">
                <thead>
                    <tr>
                        <th>zrobione:</th>
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