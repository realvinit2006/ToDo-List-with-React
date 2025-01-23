import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import "./index.css";
import "./App.css";



function App() {
  const [inp, setInp] = useState("");
  const [tasks, setTasks] = useState([]);

  // function changeInp(e) {
  // setInple.target.value);
  // }

  function addTask() {
    // tasks.push(inp);
    const obj = { id: Date.now(), task: inp };
    setTasks([ ...tasks, obj]);
    setInp(""); // to clear the input
    }
    // console.log(tasks);
    function deleteTask(e, id) {
      const indexTodelete = tasks. findIndex((obj) => {
      return obj.id === id;
      });
      setTasks
      tasks.filter((obj, index) => {
      return index !== indexTodelete;
    });
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
/>;
<button onClick={addTask}>Add Task</button>
</div>
<ul>
{tasks.map((obj, index) => {
return (
<li key={index}>
<span>{obj.task}</span>
<MdDelete />
<MdEdit onClick={(e) => deleteTask(e, obj.id)}  />
<FaCheck />
</li>
);
})
}
</ul>
    </>
    );
    }
  export default App;


