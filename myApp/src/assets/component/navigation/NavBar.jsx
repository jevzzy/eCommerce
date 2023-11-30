import {NavLink} from "react-router-dom"
import styles from "./NavBar.module.css"
import Cart from "../Cart/Cart"




function Navbar(){
return (
    
  <div className={styles.Navbar}>
    <nav>
    <NavLink
    className={({isActive}) => (
        isActive? styles.active : styles.in_active
    )}
     to="/home">
        Home
    </NavLink>
    <NavLink
      className={({isActive}) => (
        isActive? styles.active : styles.in_active
    )}
     to="/menu">
        Menu
    </NavLink>
<NavLink
  className={({isActive}) => (
    isActive? styles.active : styles.in_active
)}
 to="/signup">
    SignUp
    </NavLink>

    </nav>
<Cart/>
    
  </div>
)
}


export default Navbar