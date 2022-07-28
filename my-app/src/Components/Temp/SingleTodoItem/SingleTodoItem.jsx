
import './SingleTodoItem.scss';
import {useState} from 'react'

const SingleTodoItem = ({id, text, deleteHandler}) =>{
  const [checked, setChecked] = useState(false);

  const handleCheck = () =>{
   checked ? setChecked(false) : setChecked(true);
  }

  return (
    <div className="task">

        <input type="checkbox" onChange={handleCheck}/>
        <span className={checked ? "task__check" : "task__uncheck"}> {text}</span>
        <button onClick={() => {deleteHandler(id)}}>Delete</button>
    </div>
  );
}

export default SingleTodoItem;
