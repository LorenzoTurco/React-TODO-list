
import './Main.scss';
import SingleTodoItem from '../SingleTodoItem/SingleTodoItem'
import {useState} from 'react'


const Main = () =>{

    const [taskList, setTaskList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () =>{
        console.log(taskList)
        setTaskList([...taskList, {task: newTask, key: taskList.length}])
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



  return (

    <div className="list">


        <input type="text" onChange={handleChange} value={newTask} placeholder="Add your task here..."></input>
        <button onClick={addTask}>Submit</button>    

        <div>
         {mappedList}
        </div>
    </div>
  );
}

export default Main;
