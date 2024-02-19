import React from "react";
import "../styles/TodoForm.css";

const TodoForm = ({ submitHandler, editId, items, changeHandler }) => {
  return (
    <form onSubmit={submitHandler}>
      <div>Testing Something...</div>
      <input placeholder="Add task..." value={items} onChange={changeHandler} />
      <button type="submit" className="addTask">
        {editId ? "Edit Task" : " + New Task"}
      </button>
    </form>
  );
};

export default TodoForm;
