
import svg from "/jevzzy/React project/Ecommerce/myApp/public/cart-shopping-solid.svg"
import { useState} from "react"

import CartPage from "./cartPage"

const styles = {
       img:{
              width:"100%",
              height:"100px",
             backgroundColor:"rgba(0,0,0,0.0)"


       },
       frame:{
             width:"50px",
             height:'50px',
             cursor:"pointer",
             backgroundColor:"rgba(0,0,0,0.0)",
             border:'none'
          


       }


}
function Cart(){
const [cartList ,setCartList] = useState(true)




if(cartList){
       return (
              <button  style={styles.frame}  onClick={(e)=>(cartList?setCartList(false):setCartList(true)) }>
      
              <img   style={styles.img}src={require(svg)} alt="" />
              </button>
             )
}
else {
       return (
              <>
                         <CartPage 
                         close={(e)=>(cartList?setCartList(false):setCartList(true))}
                         /> 
              </>
  
       )
}
   
     
    
}



export default Cart