import "./layout.css";
import { Outlet, Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import {
  URL_HOME,
  URL_LOGIN,
  URL_CATEGORY,
  URL_PRODUCTS,
  URL_ABOUT,
} from "../../constants/Contants";
import InfoUser from "../infouser/InfoUser";
import Card from "../card/Card";

const Menu = () => {
  const { user } = useAuth();
  const { name } = user;
  const ItemMenu = (props: any) => {
    const { key, path, item } = props;
    return (
      <>
        <li className="nav-item nav-link" key={key}>
          
            <Link to={path}>{item}</Link>
          
        </li>
      </>
    );
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar justify-content-center">
          <li className="nav-item" key="A">
            <a className="nav-link navbar-brand">
              <ul className="navbar-nav">
                <img
                  src="./logo.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-left"
                  alt=""
                />
                <ItemMenu key="0" path={URL_HOME} item="E-Comerce" />
              </ul>
            </a>
          </li>
          <li className="nav-item" key="B">
            <button
              className="nav-link navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </li>
        </ul>

        <div
          className="collapse navbar-collapse d-flex flex-column"
          id="navbarSupportedContent"
        >
          <ul className="navbar justify-content-start">
            <form className="form-inline my-2 mr-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="...Busque Aquí"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Buscar
              </button>
            </form>

            <li className="nav-link">
              <div className="mr-4">
                <Card />
              </div>
            </li>

            <li className="nav-link">
              <div>
                {name ? (
                  <InfoUser />
                ) : (
                  <ItemMenu key="11" path={URL_LOGIN} item="Iniciar Sesion" />
                )}
              </div>
            </li>
          </ul>

          <ul className="navbar-nav d-flex flex-wrap justify-content-start text-center">
            <ItemMenu key="2" path={URL_CATEGORY} item="Categorias" />
            <ItemMenu key="3" path={URL_PRODUCTS} item="Productos" />
            <ItemMenu key="4" path={URL_ABOUT} item="Acerca de..." />
          </ul>
        </div>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Menu;
