
import './TodoList.scss';
import TodoItem from '../TodoItem/TodoItem'
import {useState} from 'react'


const TodoList = () =>{

    const [taskList, setTaskList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () =>{

        setTaskList([newTask] + taskList)
    }

    const handleChange = event =>{
        setNewTask(event.target.value)
        console.log(taskList)
    }


  return (

    <div className="list">


        <input type="text" onChange={handleChange} value={newTask} placeholder="Add your task here..."></input>
        <button onClick={addTask}>Submit</button>
    
    
    </div>
  );
}

export default TodoList;
