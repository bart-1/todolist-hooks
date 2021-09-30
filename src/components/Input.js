import React from "react";

const Input = props => {
    return (
        <>
            <form onSubmit={props.onSubmit}>
                <label htmlFor="task">Do zrobienia:
                    <input
                        type="text"
                        name="task"
                        onChange={props.onChange}
                        value={props.taskValue}
                    />
                </label>
                <label htmlFor="date">Data:
                    <input
                        type="text"
                        name="date"
                        onChange={props.onChange}
                        value={props.dateValue}
                    />
                </label>
                <button type="submit">Dodaj</button>
            </form>
        </>
    );
};

export default Input;