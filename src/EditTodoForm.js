import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";
import TextField from "@material-ui/core/TextField";
import { TodosContext } from "./contexts/todos.context";

function EditTodoForm({ task, id, toggleEditForm }) {
  const { editTodo } = useContext(TodosContext);
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEditForm();
      }}
      style={{ margin: "1rem", wdith: "50%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}

export default EditTodoForm;
