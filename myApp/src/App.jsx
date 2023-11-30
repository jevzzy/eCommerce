import { useState } from 'react'
import { myContext } from './myContext'
import reactLogo from './assets/react.svg'
import Root from './root'
import Home from "./assets/component/home/Home"
import Menu from "./assets/component/menu/Menu"
import SignUp from './assets/component/SignUp/Signup'
import Productinfo from './assets/component/pages/ProductInfo'
import {RouterProvider,createBrowserRouter,createRoutesFromElements,Route} from "react-router-dom"
import './App.css'


const appRouter  = createBrowserRouter(
  createRoutesFromElements(
<Route path="/" element={<Root/>}>
  <Route path='home' element={<Home/>}>
  <Route path="name" element={<h1>come and buy</h1>}/>
  </Route>
 
  <Route path="menu" element={<Menu/>}/>
  <Route path="products/:id" element={<Productinfo/>}/>



  <Route path="signup" element={<SignUp/>} />

</Route>
  )
)
function App() {
  const [cart, setCart] = useState([])

  return (
    <>
    <myContext.Provider value={{cart,setCart}}>
    <RouterProvider router={appRouter}/>
    </myContext.Provider>
  
      
    </>
  )
}

export default App
