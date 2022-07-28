import './Header.scss';

const Header =({resetTasks}) => {
  return (
    <div className="header">


    <h2 className = "header__title">My Todos</h2>

    <button onClick={resetTasks}>Reset</button>

    </div>
  );
}

export default Header;
