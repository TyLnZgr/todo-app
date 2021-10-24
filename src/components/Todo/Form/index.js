import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { nanoid } from "nanoid";
import "../../../../node_modules/primeicons/primeicons.css";
import List from "../List";

function Form() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: nanoid(),
      task: todo,
      isCompleted: false,
    };
    if (!newTodo.task) return;
    setTodos([...todos].concat(newTodo));
    setTodo("");
  };

  return (
    <>
      <form className="flex " onSubmit={handleSubmit}>
        <InputText
          name="task"
          className="p-2 w-6 text-3xl "
          placeholder="New todo"
          value={todo}
          onChange={handleInputChange}
        />
        <Button
          icon="pi pi-check"
          type="submit"
          label="Add Todo"
          className="p-3 ml-1 cursor-pointer border-round bg-white text-green-600 font-bold  line-height-3 text-2xl hover:bg-green-600 hover:text-white "
        />
      </form>
      <List todos={todos} setTodos={setTodos} />
    </>
  );
}

export default Form;
