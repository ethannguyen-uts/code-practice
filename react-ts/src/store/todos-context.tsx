import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (todoText: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: (todoText: string) => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{}> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodoHandler = (todoText: string): void => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const onRemoveTodoHandler = (id: string): void => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: onAddTodoHandler,
    removeTodo: onRemoveTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
