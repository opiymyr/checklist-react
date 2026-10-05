import { useState } from "react";

function TodoItem({ todo, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(todo.text);

  const save = () => {
    const trimmed = draft.trim();
    if (trimmed === "") return;
    onEdit(todo.id, trimmed);
    setIsEditing(false);
  };

  const cancel = () => {
    setDraft(todo.text);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") save();
    if (e.key === "Escape") cancel();
  };

  if (isEditing) {
    return (
      <li className="todo-item">
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
        <button onClick={save}>Сохранить</button>
        <button onClick={cancel}>Отмена</button>
      </li>
    );
  }

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />
      <span className={todo.done ? "todo-text done" : "todo-text"}>
        {todo.text}
      </span>
      <button onClick={() => setIsEditing(true)}>Изменить</button>
      <button onClick={() => onDelete(todo.id)}>Удалить</button>
    </li>
  );
}

export default TodoItem;