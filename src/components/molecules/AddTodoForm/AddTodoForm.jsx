import React, { useState, useContext } from "react";
import { AppProviderContext } from "../../../context/AppProvider";

import AddButton from "../../atoms/AddButton/AddButton";
import TextField from "../../atoms/TextField/TextField";

import "./AddTodoForm.style.css";

const AddTodoForm = () => {
  const { actions } = useContext(AppProviderContext);
  const [inputText, setInputText] = useState("");

  const submitHandler = () => {
    actions.addTodo({ message: inputText });
    setInputText("");
  };

  return (
    <div className="add-todo-form">
      <div className="add-todo-form-row">
        <TextField
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        />
      </div>
      <div className="add-todo-form-row">
        <AddButton
          text="Submit Todo"
          onClickEvent={submitHandler}
          disabled={inputText === ""}
        />
      </div>
    </div>
  );
};

export default AddTodoForm;
