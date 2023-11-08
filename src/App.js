import React, { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import bicep from "./components/bicep.gif";
const App = () => {
  const getItems = () => {
    const listItem = localStorage.getItem("listsItems");
    console.log(listItem);

    if (listItem) {
      return JSON.parse(localStorage.getItem("listsItems"));
    } else {
      return [];
    }
  };

  const [items, setItems] = useState("");
  const [lists, setLists] = useState(getItems());
  const [editId, setEditId] = useState(0);

  useEffect(() => {
    localStorage.setItem("listsItems", JSON.stringify(lists));
  }, [lists]);

  const changeHandler = (e) => {
    setItems(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (editId) {
      const editTodo = lists.find((elem) => elem.id === editId);
      const updatedTodo = lists.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, items })
          : { id: t.id, items: t.items }
      );
      setLists(updatedTodo);
      setEditId(0);
      setItems("");
      return;
    }

    if (items !== "") {
      setLists([{ id: `${items}-${Date.now()}`, items }, ...lists]);
    }
    setItems("");
  };

  const deleteHandler = (id) => {
    const deletetodo = lists.filter((elem) => elem.id !== id);
    setLists([...deletetodo]);
  };

  const editHandler = (id) => {
    const editTodo = lists.find((elem) => elem.id === id);
    setItems(editTodo.items);
    setEditId(id);
  };

  return (
    <>
      <div className="container">
        <h1>
          Add your Today's Tasks!{" "}
          <img src={bicep} className="biceps" alt="biceps" />
        </h1>
        <TodoForm
          submitHandler={submitHandler}
          items={items}
          changeHandler={changeHandler}
          editId={editId}
        />

        <TodoList
          lists={lists}
          editHandler={editHandler}
          deleteHandler={deleteHandler}
        />
      </div>
    </>
  );
};

export default App;
