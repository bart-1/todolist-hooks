import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const Task = ({ task }) => {
    const { dispatchTasks } = useContext(AppContext);
    return (
        <>
            <td>{task.date.replace('T', ' | ')}</td>
            <td>{task.body}</td>
            <td>
                <button onClick={task.status
                    ? () => dispatchTasks({ type: 'MODIFY', id: task.id })
                    : () => dispatchTasks({ type: 'DELETE', id: task.id })}
                >
                    {task.status
                        ? 'Done'
                        : 'Delete'}
                </button>
            </td>
        </>
    );
};

export default Task;