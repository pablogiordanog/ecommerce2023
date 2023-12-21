import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.js";
import Home from "./components/home/Home.tsx";
import Footer from "./components/footer/Footer.tsx";
import About from "./components/about/About.tsx";
import IndexCategory from "./components/category/IndexCategory.tsx";
import IndexProducts from "./components/products/IndexProducts.tsx";
import Search from "./components/search/Search.tsx";
import Page404 from "./components/page404/Page404.tsx";
import Login from "./components/login/Login.tsx";

import AuthContext from "./context/AuthContext.tsx";
import ProtectedRouter from "./components/ProtectedRouter.tsx";
import {
  URL_ABOUT,
  URL_CARD,
  URL_CATEGORY,
  URL_HOME,
  URL_LOGIN,
  URL_PRODUCTS,
  URL_SEARCH,
  URL_USER,
} from "./constants/Contants.tsx";
import InfoUser from "./components/infouser/InfoUser.tsx";
import Card from "./components/card/Card.tsx";

function App() {
  const [user, setUser] = useState({
    name:"",
    pws:"",
  });

  const handleLogin = (name: string, pws: string) => {
    setUser({ name, pws });
  };

  const handleLogout = () => {
    setUser({ name:"", pws:""});
  };


  const values = {user, handleLogin, handleLogout};

  return (
    <AuthContext.Provider value={values}>
      <Routes>
        <Route path={URL_HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path={URL_CATEGORY}
            element={
              <ProtectedRouter>
                <IndexCategory />
              </ProtectedRouter>
            }
          />
          <Route
            path={URL_PRODUCTS}
            element={
              <ProtectedRouter>
                <IndexProducts />
              </ProtectedRouter>
            }
          />
          <Route path={URL_ABOUT} element={<About />} />
          <Route path={URL_SEARCH} element={<Search />} />
          <Route path={URL_CARD} element={<Card />} />
          <Route path={URL_LOGIN} element={<Login />} />
          <Route path={URL_USER} element={<InfoUser />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>

      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
