import logo from './logo.svg';
import './App.scss';
import Header from './Components/Header/Header'
import TodoList from './Components/Main/TodoList/TodoList'


const App = () =>{
  return (
    <div className="app">


      <Header/>

      <TodoList></TodoList>
 
    </div>
  );
}

export default App;
