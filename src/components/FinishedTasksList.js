import React, {useContext} from 'react';
import { AppContext } from './AppContext';
import Task from './Task';

import '../styles/FinishedTasksList.css';

const FinishedTasksList = () => {
    const { tasks } = useContext(AppContext);
    const finishedTasks = tasks.filter(task => task.status === false);
    
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
            <table id="done">
                <caption>
                    Zadania zrobione
                </caption>
                <thead>
                    <tr>
                        <th>termin wykonania</th>
                        <th>oznaczono jako zrobione:</th>
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