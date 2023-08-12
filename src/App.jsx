import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import SearchResult from "./Components/SearchResult"
import ProductPage from "./Components/ProductPage"
import Checkout from "./Components/Checkout"


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route exact path="/"  element={<Home/>}/> 
    <Route  path="/search"  element={<SearchResult/>}/> 
    <Route  path="/product/:id"  element={<ProductPage/>}/> 
    <Route  path="/checkout"  element={<Checkout/>}/> 
    </Routes>
    </BrowserRouter>
  
     
   
  )
}

export default App
