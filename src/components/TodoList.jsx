import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete, onToggle, onEdit }) {
  if (todos.length === 0) {
    return <p className="empty">Дел пока нет. Добавьте первое!</p>;
  } 

  return (
    <ul className="todo-list">
      
      {todos.map((todo) => ( 
        <TodoItem
          key={todo.id}   
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default TodoList;