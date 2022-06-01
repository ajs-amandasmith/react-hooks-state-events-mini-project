import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState('')
  const [category, setCategory] = useState('')

  const options = categories.map(category => (
    <option key={category}>{category}</option>
  ))

  const addNewTask = (e) => {
    e.preventDefault();
    onTaskFormSubmit({text, category})
  }
  
  return (
    <form className="new-task-form" onSubmit={addNewTask}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {/* render <option> elements for each category here */}
          <option></option>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
