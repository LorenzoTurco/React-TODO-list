
import './SingleTodoItem.scss';

const SingleTodoItem = ({id, text, deleteHandler}) =>{

  return (

    <div className="task">

        <input type="checkbox"/>
        <span> {text}</span>
        <button onClick={() => deleteHandler(id)}>Delete</button>
    </div>
  );
}

export default SingleTodoItem;
