import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Product from './Components/Product'
import Category from './Components/Category'
import Addcategory from './Components/Addcategory'
import AddProduct from './Components/AddProduct'
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/adminlogin' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}>
         <Route path='' element={<Home/>}></Route>
         <Route path='/dashboard/category' element={<Category/>}></Route>
         <Route path='/dashboard/product' element={<Product/>}></Route>
         <Route path='/dashboard/addcategory' element={<Addcategory/>}></Route>
         <Route path='/dashboard/addproduct' element={<AddProduct/>}/>
         </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
