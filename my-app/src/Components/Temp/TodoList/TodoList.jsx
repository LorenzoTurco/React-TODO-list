
import './TodoList.scss';
import TodoItem from '../TodoItem/TodoItem'
import {useState} from 'react'


const TodoList = () =>{

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



    const drawTasks = taskList.map((task) => {
        return(
            <TodoItem deleteHandler={deleteTask}text={task.task} key={task.key} id={task.key}></TodoItem>
        )
    })




  return (

    <div className="list">


        <input type="text" onChange={handleChange} value={newTask} placeholder="Add your task here..."></input>
        <button onClick={addTask}>Submit</button>

        <TodoItem list={taskList} deleteHandler={deleteTask}></TodoItem>
    
    
    </div>
  );
}

export default TodoList;
