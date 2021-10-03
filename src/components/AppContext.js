import { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

const MainProvider = ({ children }) => {
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
                + ('0' + time.getDate()).slice(-2) + 'T'
                + ('0' + time.getHours()).slice(-2) + ':'
                + ('0' + time.getMinutes()).slice(-2)
            );
        }
        setActualDate(getDate(0))
        setRangeDate(getDate(2))

    }, [taskBody, tasks]);



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

    const click = (id, statusId) => {
        if (statusId) {
            setTasks(tasks.map(task => {
                if (task.id === id) {
                    task = {
                        id: task.id,
                        date: actualDate,
                        body: task.body,
                        status: false
                    };
                }
                return task;
            }))
        } else if (!statusId) {
            const newList = tasks.filter(task => task.id !== id);
            setTasks(newList);
        }
    }

    return (
        <AppContext.Provider value={{
            actualDate,
            rangeDate,
            tasks,
            click,
            handleInputChange,
            handleInputSubmit,
            taskBody
        }}>
            {children}
        </AppContext.Provider>
    )
}
export default MainProvider;