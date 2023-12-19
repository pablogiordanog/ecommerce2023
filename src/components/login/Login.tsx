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
    <>
      <div className="container">
            <div className="card card-container">
              <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
              <p id="profile-name" className="profile-name-card"></p>
              <form className="form-signin" onSubmit={(e) => handleLogIn(e)}>
                <span id="reauth-email" className="reauth-email"></span>
                
                <input type="email" 
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                
                <input type="password" 
                value={pws}
                onChange={(e) => {
                  setPws(e.target.value);
                }}
                id="inputPassword" className="form-control" placeholder="Password" required />

                <div id="remember" className="checkbox">
                    <label>
                        <a><input type="checkbox" value="remember-me"/> Recordar Contraseña?</a>
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Iniciar sesión</button>

              </form>
              <a href="#" className="forgot-password">
                ¿Olvidaste la contraseña?
              </a>
            </div>
      </div>
    </>
  );
};

export default Login;
