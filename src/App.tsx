import { useState } from "react";
import "./CSS/App.css";
import AdminMenu from "./Components/AdminsScreens/AdminMenuScreen/AdminMenu";
import axios, { AxiosResponse } from "axios";
import Player from "./Components/GamesProps/Player";
import Username from "./Components/LogIn/Username";
import Password from "./Components/LogIn/Password";
import LogInButton from "./Components/LogIn/LogInButton";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [adminLogged, setAdminLogged] = useState(false);
  const [userLogged, setUserLogged] = useState(false);

  const checkForErrorInInput = (): boolean => {
    if (username === "") {
      setError(true);
      setErrorMessage("Username field is empty");
      return false;
    }
    if (password === "") {
      setError(true);
      setErrorMessage("Password field is empty");
      return false;
    }
    setError(false);
    return true;
  };

  async function handleUserType(userType: Promise<AxiosResponse<any, any>>) {
    if ((await userType).data === 0) {
      setError(true);
      setErrorMessage("Username or password is incorrect!");
      setUserPermission(false, false);
      return;
    }
    if ((await userType).data === 1) {
      setUserPermission(true, false);
      return;
    }
    setUserPermission(false, true);
  }

  function setUserPermission(
    isAdminLogged: boolean,
    isUserLogged: boolean
  ): void {
    setAdminLogged(isAdminLogged);
    setUserLogged(isUserLogged);
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (checkForErrorInInput()) {
      try {
        const userType = getUser(username, password);
        await handleUserType(userType);
      } catch (error) {
        console.error("Error posting data:", error);
      }
    }
  };

  return (
    <div className="all">
      {!adminLogged && !userLogged && (
        <>
          <h1 className="title">Login</h1>
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <Username username={username} setUsername={setUsername} />
              </div>
              <div className="form-group">
                <Password password={password} setPassword={setPassword} />
              </div>
              <div className="form-group">
                <LogInButton />
              </div>
              {error && <div className="error">{errorMessage}</div>}
            </form>
          </div>
        </>
      )}
      {adminLogged && !userLogged && <AdminMenu />}
      {userLogged && <Player />}
    </div>
  );
};

export default LogIn;

function getUser(username: string, password: string) {
  const data = {
    user_name: username,
    password: password,
  };
  const response = axios.post("http://localhost:8000/users/isAdmin", data);
  return response;
}
