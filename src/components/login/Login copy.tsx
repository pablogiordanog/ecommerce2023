import "./login.css"
import { useState } from "react";
import useAuth from "../../hook/useAuth";
import { useNavigate } from "react-router-dom";
import { URL_HOME } from "../../constants/Contants";
import InfoUser from "../infouser/InfoUser";

const Login = () => {
  const {user, handleLogin } = useAuth();
  const [name, setName] = useState("");
  const [pws, setPws] = useState("");

  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    handleLogin(name, pws);
    navigate(URL_HOME, { replace: true });
  };
  if(user.name){
    return <InfoUser />;
  }
  return (
    <div>
      <div className="login">
        <div className="login-triangle"></div>

        <h2 className="login-header">Iniciar Sesion</h2>

        <form className="login-container" onSubmit={(e) => handleLogIn(e)}>
          <p>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="email"
              placeholder="Email"
            />
          </p>

          <p>
            <input
              value={pws}
              onChange={(e) => {
                setPws(e.target.value);
              }}
              type="password"
              placeholder="Password"
            />
          </p>

          <button type="submit">Iniciar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
