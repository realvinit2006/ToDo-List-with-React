import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import "./index.css";
import "./App.css";

// const { useState } = require("react")

function App() {
  const [inp, setInp] = useState("");
  const [tasks, setTasks] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
      const [editId, setEditId] = useState(null);



  function addTask () {
        if(!isEditing) {
          const obj = {id: Date.now(), task:inp, completed: false }
          setTasks([...tasks, obj])
        } else {
    setTasks(
      tasks.map((obj) => {
        return obj.id === editId ? {...obj,task:inp } : obj;
      })
    );
    setIsEditing(false);
    setEditId(null);
        }
    setInp(""); // to clear the input
    }
    // console.log(tasks);
    function deleteTask(e, id) {
      setTasks(tasks.filter((obj) => obj.id !== id));
    }
  
  function editTask(e, id) {
    // const taskToEdit = tasks.find((task) => {
    //         return task.id === id;
    //       });
    //       setInp(taskToEdit.task);
          // setIsEditing(true);
          const taskToEdit = tasks.find((task) => task.id === id);
          setInp(taskToEdit.task);
          setIsEditing(true);
          setEditId(id);
  }
  function markAsComplete(e, id) {
       setTasks(
        tasks.map((obj) => {
          return obj.id === id ? { ...obj, completed: !obj.completed} : obj;
        })
       )
      }
    
  return (
    <>
   <div id="todo">
<h1>Todo App</h1>
<input
type="text"
placeholder="Enter The Task"
value={inp}
onChange={(e) => setInp(e.target.value)}
/>
<button onClick={addTask}>
   {!isEditing ? "Add Task" : "Edit Task"}
  </button>
</div>
<ul>
{tasks.map((obj, index) => {
return (
<li key={index} className={obj.completed ? "completed" : "  "}>
<span>{obj.task}</span>
<MdDelete className="delete-icon" onClick={(e) => deleteTask(e, obj.id)} />
  {!obj.completed &&(
    <MdEdit className="edit-icon" onClick={(e) => editTask(e, obj.id)}  />

  )}
    {!obj.completed &&(
<FaCheck className="complete-icon" onClick={(e) => markAsComplete(e, obj.id)} />
    )}
</li>
);
})
}
</ul>
    </>
    )}
  
    
  export default App;

