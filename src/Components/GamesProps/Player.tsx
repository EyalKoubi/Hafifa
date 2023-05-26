import { useState } from "react";
import { Route, Router, Switch } from "react-router-dom";
import NotFound from "../DontFound";
import QuizGame from "./QuizGame";
import RockPaperScissors from "./RockPaperScissors";
import Memory from "./Memory";
import TicTacToe from "./TicTacToe";
import Home from "../MainScreen/Home";
import Navbar from "../MainScreen/Navbar";
import { createBrowserHistory } from "history";
import "../../CSS/GamesProps/Player.css";
import App from "../../App";

const history = createBrowserHistory();

const Player = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleShowLogin = () => {
    setShowLogin(true);
  };

  if (showLogin) {
    return <App />;
  }

  return (
    <div className="all">
      <button className="back-button" onClick={handleShowLogin}>
        LogOut
      </button>
      <Router history={history}>
        <div className="App">
          <div className="title">
            <Navbar></Navbar>
          </div>
          <div className="nisuy">
            <Switch>
              <Route exact path="/Home">
                <Home />
              </Route>
              <Route exact path="/tictactoe">
                <TicTacToe />
              </Route>
              <Route exact path="/memory">
                <Memory />
              </Route>
              <Route exact path="/RockPaperScissors">
                <RockPaperScissors />
              </Route>
              <Route path="/quizgame">
                <QuizGame />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default Player;
