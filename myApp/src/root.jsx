import { Outlet } from "react-router-dom";
import Navbar from "./assets/component/navigation/NavBar";
import "../src/index.css"




function Root(){
    return(
        <>
        
        <Navbar/>
        <main>
        <Outlet/>
        </main>
       
        </>
    )
}


export default Root