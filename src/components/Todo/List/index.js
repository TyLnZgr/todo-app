import React, { useState } from "react";
import "../../../../node_modules/primeicons/primeicons.css";

function List({ todos, setTodos }) {
  const [todoEditing, setTodoEditing] = useState(null);
  const [editTask, setEditTask] = useState("");

  const handleRemoveTodo = (id) => {
    if (window.confirm("Are you sure ?")) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  const handleEditTask = (id) => {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.task = editTask;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
    setEditTask("");
  };

  return (
    <div className="container flex flex-column">
      {todos.map((todo) => (
        <div
          className="text-4xl flex justify-content-between border-double w-6 p-3 font-semibold "
          key={todo.id}
        >
          <div
            onClick={() => {
              setTodos(
                todos.map((el) =>
                  el.id === todo.id
                    ? { ...el, isCompleted: !el.isCompleted }
                    : el
                )
              );
            }}
            className={
              todo.isCompleted
                ? "line-through cursor-pointer"
                : "cursor-pointer"
            }
          >
            {todoEditing === todo.id ? (
              <input
                type="text"
                onChange={(e) => setEditTask(e.target.value)}
                value={editTask}
              />
            ) : (
              todo.task
            )}
          </div>

          <div>
            <i
              className="pi pi-times-circle cursor-pointer p-1 mr-4  text-pink-900 hover:bg-pink-900 hover:text-white"
              style={{ fontSize: "1.75em" }}
              onClick={() => handleRemoveTodo(todo.id)}
            ></i>
            <i
              className="pi pi-pencil cursor-pointer p-1 text-yellow-700 hover:bg-yellow-500 hover:text-white"
              style={{ fontSize: "1.75em" }}
              onClick={() => setTodoEditing(todo.id)}
            ></i>
            <button
              className={
                !editTask
                  ? "hidden"
                  : "pi pi-check cursor-pointer p-1 ml-1 text-green-900  surface-800"
              }
              style={{ fontSize: "1.75em" }}
              onClick={() => handleEditTask(todo.id)}
            ></button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
