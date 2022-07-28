
import './TodoItem.scss';
import SingleTodoItem from '../SingleTodoItem/SingleTodoItem'

const TodoItem = ({deleteHandler, list}) =>{

    console.log(list)

    const mappedList = list.map(item => {

        return (
            <SingleTodoItem 
            key={item.key} 
            id={item.key}
            text={item.task} 
            deleteHandler={deleteHandler}
            />
        )
    })


  return (

    <div className="task">

        {mappedList}
    </div>
  );
}

export default TodoItem;
