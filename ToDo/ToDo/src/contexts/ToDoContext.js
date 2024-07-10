import { createContext, useContext } from "react";

export const ToDoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updatedTodo: (id, todo) => {},
  deletedTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useToDo = () => {
  return useContext(ToDoContext);
};

export const ToDoprovider = TodoContext.Provider;
