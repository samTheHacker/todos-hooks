//todos
//al methods to interact /w todos
import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";
import uuid from "uuid/v4";

const defaultTodos = [
  { id: uuid(), task: "Mow the lawn", completed: false },
  { id: uuid(), task: "Do React coding", completed: true }
];

export const TodosContext = createContext();

export function TodosProvider(props) {
  const todosStuff = useTodoState(defaultTodos);
  return (
    <TodosContext.Provider value={todosStuff}>
      {props.children}
    </TodosContext.Provider>
  );
}
