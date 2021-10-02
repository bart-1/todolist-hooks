import React from 'react';

const Task = ({ task, click, actualDate }) => {
    return (
        <>
            <td>{task.date.replace('T', ' | ')}</td>
            {task.status ? null : <td>{actualDate.replace('T', ' | ')}</td>}
            <td>{task.body}</td>
            <td>
                <button onClick={() => click(task.id)}>
                    {task.status
                        ? 'Done'
                        : 'Delete'}
                </button>
            </td>
        </>
    );
};

export default Task;