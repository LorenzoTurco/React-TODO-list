
import './Main.scss';
import TodoList from './TodoList/TodoList'
import {useState, useEffect} from 'react'


const Main = () =>{

    const [taskList, setTaskList] = useState([]);
    const [newTask, setNewTask] = useState("");

   useEffect(() =>{ 
        
      },[newTask])

  return (
    <div className="main">

      <TodoList taskList = {taskList} newTask = {newTask}setTaskList= {setTaskList} setNewTask={setNewTask}/>
 
    </div>
  );
}

export default Main;
