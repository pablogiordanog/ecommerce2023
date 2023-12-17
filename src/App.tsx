import "./App.css"
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.js"
import Home from './components/Home.tsx';
import Footer from "./components/Footer.tsx"
import About from "./components/About.tsx"
import IndexShop from "./components/shop/IndexShop.tsx"
import IndexStories from "./components/stories/IndexStories.tsx"
import Search from "./components/Search.tsx"
import Page404 from "./components/Page404.tsx"
import Login from "./components/Login.tsx"

import AuthContext from "./context/AuthContext.tsx"
import ProtectedRouter from "./components/ProtectedRouter.tsx";
import { URL_HOME } from "./constants/Contants.tsx";


function App() {
  const [user, setUser] = useState({
    name:"",
  });

  const handleLogin = (name:string) =>{
    setUser({name});
  }
  const handleLogout = (name:string) =>{
    name = "";
    setUser({name});
  }

  const values = {user,
                 handleLogin,
                 handleLogout}
  
  return (
    <AuthContext.Provider value={values}>  
      <Routes>
        <Route path={URL_HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/ecommerce2023/indexshop" element={
            <ProtectedRouter>
              <IndexShop />
            </ProtectedRouter>
          } />
          <Route path="/ecommerce2023/indexstories" element={
            <ProtectedRouter>
              <IndexStories />
            </ProtectedRouter>
          } />
          <Route path="/ecommerce2023/about" element={<About />} />
          <Route path="/ecommerce2023/search" element={<Search />} />
          <Route path="/ecommerce2023/login" element={<Login />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
            
      <Footer/>
    </AuthContext.Provider>
  )
}

export default App
