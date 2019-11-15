//todos
//al methods to interact /w todos
import React, { createContext, useReducer } from "react";
import todoReducer from "../reducers/todo.reducer";
// import useTodoState from "../hooks/useTodoState";
import uuid from "uuid/v4";

const defaultTodos = [
  { id: uuid(), task: "Mow the lawn", completed: false },
  { id: uuid(), task: "Do React coding", completed: true }
];

export const TodosContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
}
