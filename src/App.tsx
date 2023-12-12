import "./App.css"
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.js"
import Home from './components/Home.tsx';
import Footer from "./components/Footer.tsx"
import About from "./components/About.tsx"
import IndexShop from "./components/shop/IndexShop.tsx"
import IndexStories from "./components/stories/IndexStories.tsx"
import Search from "./components/Search.tsx"

import Login from "./components/Login.tsx"
import Page404 from "./components/Page404.tsx"


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/indexshop" element={<IndexShop />} />
          <Route path="/indexstories" element={<IndexStories />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
            
      <Footer/>
    </div>
  )
}

export default App
