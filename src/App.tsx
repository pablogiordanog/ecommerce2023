import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.js";
import Home from "./components/home/Home.tsx";
import Footer from "./components/footer/Footer.tsx";
import About from "./components/about/About.tsx";
import IndexCategory from "./components/category/IndexCategory.tsx";
import ACategory from "./components/category/ACategory.tsx";
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
import AProduct from "./components/products/AProduct.tsx";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import useInfoUser from "./hook/useInfoUser.tsx";

function App() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleLogin = (email: string, password: string, rol:string, avatar:string, userName:string) => {
    setUser({ email, password});
    
    /*console.log(rol)
    console.log(avatar)
    */

    localStorage.setItem("user", JSON.stringify({ email, password, rol, avatar , userName}));
  };

  const handleLogout = () => {
    console.log("funcion logout")
    setUser({ email: "", password: ""});
    localStorage.removeItem("user");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  };

  const queryClient = new QueryClient();
  const value = { user, handleLogin, handleLogout };

  useEffect(() => {
    const storageUser = useInfoUser();
    if (storageUser) {
      const {email, password, rol, avatar, userName} = storageUser;
      handleLogin(email,password, rol, avatar, userName);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={value}>
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
              path={URL_CATEGORY + "/:id"}
              element={
                <ProtectedRouter>
                  <ACategory />
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
            <Route
              path={URL_PRODUCTS + "/:id"}
              element={
                <ProtectedRouter>
                  <AProduct />
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
    </QueryClientProvider>
  );
}

export default App;
