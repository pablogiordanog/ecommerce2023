import { Outlet, Link } from "react-router-dom";
import { URL_HOME } from "../constants/Contants";

export default function Menu (){
    const OPCIONS_MENU = [{id:1,path:URL_HOME,item:"Ecommerce"},
                {id:2,path:"/ecommerce2023/indexshop",item:"Shop"},
                {id:3,path:"/ecommerce2023/indexstories",item:"Stories"},
                {id:4,path:"/ecommerce2023/about",item:"About"},
                {id:5,path:"/ecommerce2023/search",item:"Search"},
                {id:6,path:"/ecommerce2023/login",item:"Login"}];

    const ItemMenu = (props:any) => {
        const { path, item } = props;
        return (
            <>
                <Link to={path}>{item}</Link>
            </>
        );
    }

    return (
        <>
            <div className="logo">Tienda Ecommerce</div>
            <nav className="navbar">
                <ul key="key1">
                    {OPCIONS_MENU.map((optionMenu)=>(
                        <li key={optionMenu.id}>
                            <ItemMenu path={optionMenu.path} item={optionMenu.item}/>
                        </li>
                        ))}
                </ul>
            </nav>
            <div className="cart">Carrito</div>
            <hr />
            <Outlet />

            
        </>
    )
}