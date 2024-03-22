import { useCallback, useState } from "react";
import TodoInput from "./TodoInput"
function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = useCallback((newTodo) => {
    setTodos(prevTodos => [...prevTodos, newTodo]);
  }, []);

  return (
    <div>      
      <h1 className="text-2xl font-bold p-2">To-Do List</h1>
      <TodoInput onAddTodo={handleAddTodo} />
      <ul className="mt-4 p-2">
        {todos.map((todo, index) => (
          <li key={index} className="mb-2">{index+1}: {todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
