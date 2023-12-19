import { Outlet, Link } from "react-router-dom";
import useAuth from "../hook/useAuth";
import {
  URL_CARD,
  URL_HOME,
  URL_LOGIN,
  URL_SEARCH,
  URL_USER,
} from "../constants/Contants";
import InfoUser from "./infouser/InfoUser";
import Search from "./search/Search";
import Card from "./Card";

export default function Menu() {
  const { user } = useAuth();
  const { name } = user;

  const OPCIONS_MENU = [
    { id: 1, path: URL_HOME, item: "Ecommerce" },
    { id: 2, path: "/ecommerce2023/indexshop", item: "Shop" },
    { id: 3, path: "/ecommerce2023/indexstories", item: "Stories" },
    { id: 4, path: "/ecommerce2023/about", item: "About" },
    { id: 5, path: URL_SEARCH, item: <Search /> },
    { id: 6, path: URL_CARD, item: <Card /> },
    {
      id: 7,
      path: name ? URL_HOME : URL_LOGIN,
      item: name ? <InfoUser /> : "Login",
    },
  ];

  const ItemMenu = (props: any) => {
    const { path, item } = props;
    return (
      <>
        <Link to={path}>{item}</Link>
      </>
    );
  };

  return (
    <>
      <div className="logo">
        <img src="logo.svg" alt="" />
        Tienda Ecommerce
      </div>
      <nav className="navbar">
        <ul className="navbar ul" key="key1">
          {OPCIONS_MENU.map((optionMenu) => (
            <li className="navbar li" key={optionMenu.id}>
              <ItemMenu path={optionMenu.path} item={optionMenu.item} />
            </li>
          ))}
        </ul>
      </nav>
      {/*<div className="cart">Carrito</div>*/}

      <hr />
      <Outlet />
    </>
  );
}
