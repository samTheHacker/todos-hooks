import React from "react";
// import useTodoState from "./hooks/useTodoState";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
// import uuid from "uuid/v4";
import { TodosProvider } from "./contexts/todos.context";

function TodoApp() {
  // const initialTodos = [{ id: uuid(), task: "pet a Monkey", completed: false }];
  // const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
  //   initialTodos
  // );
  // const initialTodos = [
  //   { id: 1, task: "Do the washing up", completed: false },
  //   { id: 2, task: "Wash Car", completed: true },
  //   { id: 3, task: "Do Coding stuff", completed: false }
  // ];

  // useEffect(() => {
  //   window.localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "fafafa"
      }}
      elevation={0}
    >
      <AppBar position="static" color="primary" style={{ height: "64px" }}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            TODOS WITH HOOKS
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>
            <TodoForm />
            <TodoList />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
