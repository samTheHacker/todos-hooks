//todos
//all methods to interact /w todos
import React, { createContext } from "react";
import { UseLocalStorageReducer } from "../hooks/useLocalStorageReducer";
import todoReducer from "../reducers/todo.reducer";
// import useTodoState from "../hooks/useTodoState";
import uuid from "uuid/v4";

const defaultTodos = [
  { id: uuid(), task: "Mow the lawn", completed: false },
  { id: uuid(), task: "Do React coding", completed: true }
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = UseLocalStorageReducer(
    "todos",
    defaultTodos,
    todoReducer
  );
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
