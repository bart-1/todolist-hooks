import React, { useContext, useEffect, useRef } from "react";
import { AppContext } from "./AppContext";

import '../styles/Input.css';

const Input = () => {
    const { actualDate, rangeDate, handleInputChange, handleInputSubmit, taskBody } = useContext(AppContext);
    const focusedInput = useRef(true);

    useEffect(() => {
        focusedInput.current.focus();
    }, []);


    return (
        <>
            <form onSubmit={handleInputSubmit}>
                <label htmlFor="task"><p>Do zrobienia:</p>
                    <textarea
                        ref={focusedInput}
                        type="text"
                        name="task"
                        align="top"
                        onChange={handleInputChange}
                        value={taskBody}
                        autoComplete="off"
                        placeholder="wpisz tutaj..."
                    />
                </label>
                <div className="date-group">
                    <label htmlFor="date"><p>Data:</p>
                        <input
                            type="datetime-local"
                            name="date"
                            onChange={handleInputChange}
                            value={actualDate}
                            autoComplete="off"
                            min={actualDate}
                            max={rangeDate}
                            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
                        />
                    </label>
                    <button type="submit">Dodaj</button>
                </div>
            </form>
        </>
    );
};

export default Input;