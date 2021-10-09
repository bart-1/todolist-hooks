import { createContext, useEffect, useReducer, useState } from 'react';

export const AppContext = createContext();




const TasksReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.newElement];
        case 'DELETE':
            return state.filter(element => element.id !== action.id);
        case 'ERASE':
            return state = '';
        case 'INPUT':
            return action.value;
        case 'MODIFY':
            return state.map(element => {
                if (element.id === action.id) {
                    return element = {
                        id: element.id,
                        date: element.date,
                        body: element.body,
                        status: false
                    };
                } else {
                    return element;
                }
            });
        case 'FETCH':
            return action.data;
        default:
            throw new Error(`wrong type`);
    }

}

const MainProvider = ({ children }) => {
    // const [tasks, setTasks] = useState([]);
    const [actualDate, setActualDate] = useState('');
    const [rangeDate, setRangeDate] = useState('');

    // const AppContext = useContext(true);

    const [tasks, dispatchTasks] = useReducer(TasksReducer, []);
    const [inputText, dispatchText] = useReducer(TasksReducer, []);
    const [inputDate, dispatchDate] = useReducer(TasksReducer, []);



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

    }, [inputText, tasks]);



    // const handleInputChange = e => {
    //     if (e.target.name === 'task') {
    //         setTaskBody(e.target.value)
    //     } else if (e.target.name === 'date') {
    //         setActualDate(e.target.value)
    //     }
    // }

    const handleInputSubmit = e => {
        e.preventDefault();
        dispatchTasks({
            type: 'ADD', newElement: {
                id: tasks.length + 1,
                date: actualDate,
                body: inputText,
                status: true
            }
        })
        setActualDate('');
        dispatchText({ type: 'ERASE' });
    }

    return (
        <AppContext.Provider
            value={{
                actualDate,
                dispatchDate,
                dispatchTasks,
                dispatchText,
                inputDate,
                inputText,
                rangeDate,
                tasks,
                handleInputSubmit,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
export default MainProvider;