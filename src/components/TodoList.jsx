import React, { useState } from "react";
import "../styles/TodoList.css";

const TodoList = ({ lists, editHandler, deleteHandler }) => {
  const [toggle, setToggle] = useState(true);
  const [donetoggle, setDoneToggle] = useState(true);

  const toggleHandler = (index) => {
    setToggle((state) => ({
      ...state, // <-- copy previous state
      [index]: !state[index], // <-- update value by index key
    }));
  };

  const doneToggleHandler = (index) => {
    setDoneToggle((state) => ({
      ...state,
      [index]: !state[index],
    }));
  };

  return (
    <ul className="rendered-list">
      {lists.map((list, index) => {
        return (
          <li key={list.id} className={donetoggle[index] ? "stroke" : "normal"}>
            {list.items}
            <div className="done-box">
              <button onClick={() => doneToggleHandler(index)}>
                {donetoggle[index] ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#f03e3e"
                    className="cross"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="checked"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="del-edit-box">
              <button onClick={() => toggleHandler(index)}>
                {toggle[index] ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="chevron-down"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="chevron-up"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                )}
              </button>
            </div>
            {toggle[index] ? (
              <>
                <button className="del" onClick={() => deleteHandler(list.id)}>
                  <span>Delete</span>
                </button>
                <button className="edit" onClick={() => editHandler(list.id)}>
                  <span>Edit</span>
                </button>
              </>
            ) : (
              ""
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
