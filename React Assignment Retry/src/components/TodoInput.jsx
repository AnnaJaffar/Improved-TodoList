import React, { useState } from "react";

export default function TodoInput({ onAddTodo }) {

  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddButtonClick = () => {
    if (newTodo.trim()) {
      onAddTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div className="flex gap-2 mb-2 p-2" >
      <input
        type="text"
        placeholder="Enter a new to-do item"
        className="border border-gray-300 rounded p-2"        
        value={newTodo}
        onChange={handleInputChange}
      />
      <button className="bg-blue-500 text-white px-5 py-2 rounded" onClick={handleAddButtonClick}>Add</button>
    </div>
  );
}