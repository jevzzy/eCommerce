import {useState,useEffect,useContext} from "react"
import { myContext } from "../../../myContext"
import Card from "../pages/card"
import getProduct from "../../mock"
import styles from "./Menu.module.css"
import "./animation.css"


function Menu(){

    const [data,SetData] = useState([])
const [isLoading, SetLoad] = useState(false);
const {cart,setCart}= useContext(myContext)


useEffect(()=> {
    async function getProducts(){
        SetLoad(true)
        const products = await getProduct()
        SetData(products)
        SetLoad(false)
    }
    getProducts()


},[])


function addToCart(e){
    const index = e.target.id;
const p = data.filter(prod => prod.id == index)
const product = p[0]
 cart.push(product)
setCart(
    [
        ...cart,
    ]

);
console.log(cart)
    }


const products = data.map(( product,index )=> 
<Card key={index} name={product.title}
         url={product.image}
         price={product.price}
         productId={product.id}
         id={product.id}
         event={addToCart}
         />
          

)

    return(
    
<div className={styles.cont}>
    {isLoading?<div className='container'>
  <div className='loader'>
    <div className='loader--dot'></div>
    <div className='loader--dot'></div>
    <div className='loader--dot'></div>
    <div className='loader--dot'></div>
    <div className='loader--dot'></div>
    <div className='loader--dot'></div>
    <div className='loader--text'></div>
  </div>
</div>:products}
        
        </div>
    
)
    }



export default Menu