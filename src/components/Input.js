import React from "react";

const Input = props => {
    return (
        <>
            <form onSubmit={props.onSubmit}>
                <label htmlFor="task"><p>Do zrobienia:</p>
                    <textarea
                        type="text"
                        name="task"
                        align="top"
                        onChange={props.onChange}
                        value={props.taskValue}
                        autoComplete="off"
                        placeholder="wpisz tutaj..."
                    />
                </label>
                <div className="date-group">
                    <label htmlFor="date"><p>Data:</p>
                        <input
                            type="datetime-local"
                            name="date"
                            onChange={props.onChange}
                            value={props.dateValue}
                            autoComplete="off"
                            min={props.dateValue}
                            max={props.rangeDate}
                        />
                    </label>
                    <button type="submit">Dodaj</button>
                </div>
            </form>
        </>
    );
};

export default Input;