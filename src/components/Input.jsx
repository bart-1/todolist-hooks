import React, { useContext, useEffect, useRef } from "react";
import { AppContext } from "./AppContext";

import "../styles/Input.css";

const Input = () => {
  const {
    actualDate,
    inputDate,
    inputText,
    dispatchText,
    dispatchDate,
    rangeDate,
    handleInputSubmit,
  } = useContext(AppContext);
  const focusedInput = useRef(true);

  useEffect(() => {
    focusedInput.current.focus();
  }, []);

  return (
    <>
      <form onSubmit={handleInputSubmit}>
        <label htmlFor="task">
          <p>Do zrobienia:</p>
          <textarea
            ref={focusedInput}
            type="text"
            name="task"
            align="top"
            onChange={(e) =>
              dispatchText({
                type: "INPUT",
                value: e.target.value,
                name: e.target.name,
              })
            }
            value={inputText}
            autoComplete="off"
            placeholder="wpisz tutaj..."
          />
        </label>
        <div className="date-group">
          <label htmlFor="date">
            <p>Data:</p>
            <input
              type="datetime-local"
              name="date"
              onChange={(e) =>
                dispatchDate({
                  type: "INPUT",
                  value: e.target.value,
                  name: e.target.name,
                })
              }
              value={inputDate}
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
