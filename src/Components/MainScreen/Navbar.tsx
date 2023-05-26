import "../../CSS/MainScreen/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="some">
      <h1 className="gaming">GamingTime</h1>
      <div className="links">
        <Link to="/Home" className="homeLink">
          Home
        </Link>
        <Link to="/quizgame" className="quizgame">
          Quiz Game
        </Link>
        <Link to="/tictactoe" className="addMission">
          TicTacToe
        </Link>
        <Link to="/RockPaperScissors">Rock Paper Scissors</Link>
        <Link to="/memory" className="memoryGame">
          Memory Game
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
