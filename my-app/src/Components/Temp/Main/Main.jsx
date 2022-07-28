
import './Main.scss';
import SingleTodoItem from '../SingleTodoItem/SingleTodoItem'
import Header from '../Header/Header'
import {useState} from 'react'
import { BsPlusCircleFill } from "react-icons/bs";



const Main = () =>{

    const [taskList, setTaskList] = useState([]);
    const [newTask, setNewTask] = useState("");

  const resetTasks =() =>{
    setTaskList([]);
  }

    const addTask = (event) =>{
      console.log(event)
      newTask.length == 0 ? alert("Empty") : setTaskList([...taskList, {task: newTask, key: taskList.length}])
      
    }

    const deleteTask = (id) =>{
      setTaskList(taskList.filter((task) => task.key != id))
    }

    const handleChange = event =>{
        setNewTask(event.target.value)
    }

    const mappedList = taskList.map(item => {

      return (
          <SingleTodoItem 
          key={item.key} 
          id={item.key}
          text={item.task} 
          deleteHandler={deleteTask}
          />
      )
  })


//TODO: PUT SEARCH BAR INTO NEW COMPONENT
  return (

    <>
    <Header resetTasks={resetTasks}/>

    <div className="bar">
        <input className="bar__input"type="text" onChange={handleChange} value={newTask} placeholder="Add your task here..."></input>
        <div onClick={addTask}>
          <BsPlusCircleFill/>
        </div>  
    </div>

    <div className="list">

      {taskList.length>0 &&
        <div>
          {mappedList}
        </div>}

      {taskList.length == 0 &&
        <div className="">
          Nothing to see here yet... Add a task in the fields above!
        </div>}
    
    </div>
    </>
  );
}

export default Main;
