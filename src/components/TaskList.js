import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete, filter }) {
  const taskList = tasks.map(task => (
    <Task 
      text={task.text}
      category={task.category}
      key={task.text}
      handleDelete={handleDelete}
    />
  ))

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskList}
    </div>
  );
}

export default TaskList;
