import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const Task = ({ task }) => {
    const { actualDate, click } = useContext(AppContext);
    return (
        <>
            <td>{task.date.replace('T', ' | ')}</td>
            {task.status ? null : <td>{actualDate.replace('T', ' | ')}</td>}
            <td>{task.body}</td>
            <td>
                <button onClick={() => click(task.id, task.status)}>
                    {task.status
                        ? 'Done'
                        : 'Delete'}
                </button>
            </td>
        </>
    );
};

export default Task;