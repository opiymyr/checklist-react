import { useState } from "react"; 

function AddTodoForm({ onAdd }) { 
  const [text, setText] = useState(""); 

  const handleSubmit = (event) => { 
    event.preventDefault(); 

    const trimmed = text.trim(); 
    if (trimmed === "") return;  

    onAdd(trimmed); 
    setText("");    
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Что нужно сделать?"
        value={text}                          
        onChange={(e) => setText(e.target.value)} 
      />
      <button type="submit">Добавить</button>
    </form>
  );
}

export default AddTodoForm;