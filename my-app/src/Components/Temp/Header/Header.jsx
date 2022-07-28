import './Header.scss';

const Header =({resetTasks}) => {
  return (
    <div className="header">

      <h2 className = "header__title">My Todos</h2>

      <div className="header__button-container">
        <button className="header__button"onClick={resetTasks}>Reset</button>
      </div>
    </div>
  );
}

export default Header;
