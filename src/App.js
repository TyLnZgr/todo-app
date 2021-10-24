import React from "react";
import Form from "./components/Todo/Form";

function App() {
  return (
    <div className="container">
      <h1 className="pt-6 pb-3 px-0  text-7xl uppercase text-blue-900">
        My Todos
      </h1>

      <Form />
    </div>
  );
}

export default App;
