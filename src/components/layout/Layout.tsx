import "./layout.css";
import { Outlet, Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { URL_HOME, URL_LOGIN } from "../../constants/Contants";
import InfoUser from "../infouser/InfoUser";
import Card from "../Card";

const Menu = () => {
  const { user } = useAuth();

  const OPCIONS_MENU = [
    { id: 1, path: "/ecommerce2023/indexshop", item: "Shop" },
    { id: 2, path: "/ecommerce2023/indexstories", item: "Stories" },
    { id: 3, path: "/ecommerce2023/about", item: "About" },
  ];

  const ItemMenu = (props: any) => {
    const { path, item } = props;
    return (
      <>
        <a className="nav-link"><Link to={path}>
          {item}
        </Link></a>
      </>
    );
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">
          <ItemMenu path={URL_HOME} item="E-Comerce" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {OPCIONS_MENU.map((optionMenu) => (
              <li className="nav-item active" key={optionMenu.id}>
                <ItemMenu path={optionMenu.path} item={optionMenu.item} />
              </li>
            ))}
          </ul>
          <form className="form-inline my-2 my-lg-0">
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

          <Card />

          {user.name ? (
            <InfoUser />
          ) : (
            <ItemMenu path={URL_LOGIN} item="Login" />
          )}
        </div>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Menu;
