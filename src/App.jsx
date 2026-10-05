import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() { 
  const [todos, setTodos] = useState([]); 
  
  const addTodo = (text) => { 
    const newTodo = { 
      id: crypto.randomUUID(), 
      text: text,              
      done: false,            
    };
    setTodos([...todos, newTodo]); 
  };

  const deleteTodo = (id) => { 
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => { 
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const editTodo = (id, newText) => { 
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="app">
      <h1>Мой чеклист</h1>

      
      <AddTodoForm onAdd={addTodo} />  

      
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
        onEdit={editTodo}
      />
    </div>
  );
}

export default App;