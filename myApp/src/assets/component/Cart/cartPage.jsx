import {useState, useContext } from "react"
import { myContext } from "../../../myContext"
import List from "./list"
const styles = {
    container:{
        position:"absolute",
        width:"35%",
        height:'auto',
        backgroundColor:"white",
        top:'5%',
        right:"20px",
        zIndex:3,
     

    },
    li:{
        marginBottom:"20px",
        marginRight:"30px",
        fontSize:"20px",
        listStyle:'none',
        borderRadius:"4px",
        height:'auto',
        width:'90%',
        textAlign:'left'
    }
}


function CartPage(props){
    const {cart,setCart} = useContext(myContext)
 
   


    function removeFromCart(e){
  const index = e.target.id
setCart((cart) => cart.filter(prod => prod.id !== index))
console.log(cart)
    }

    const list = cart.map(product=> 
     <List  key={product.id}
     title = {product.title}
     price={product.price}
     remove={removeFromCart}
     id={product.id}
   
     />
        )

    return  (
        <div style={styles.container}>
            <h3 style={{
                textAlign:"center"
            }}>cart</h3>
            <hr></hr>
<ul >
    {list}

</ul>
<hr></hr>
<button onClick={props.close}>close</button>
<button>checkout</button>
        </div>
    )
}


export default CartPage