import "./infouser.css";
import useAuth from "../../hook/useAuth";

const InfoUser = () => {
  const { user } = useAuth();
  
  return (
    <div>
      <a
          className="nav-link dropdown-toggle"
          role="button"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          <img className="mg-fluid" height="30px" width="30px" src="./user.svg" />  
          <h6>{user.name}</h6>
        </a>
      <div className="nav-item dropdown">
        <div className="dropdown-menu">
          <a className="dropdown-item" onClick={user.handleLogout}>
            Cerrar Sesion
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoUser;
