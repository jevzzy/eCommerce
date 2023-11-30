import {Outlet, useSearchParams,Link} from "react-router-dom"
import { useState,useEffect } from "react"
import styles from "./Home.module.css"
import Search from "../search/search"
import img from "./search (1).png"
import getProduct from "../../mock"



function Home(){

  const [product,setProduct] = useState([]);
    const [params,setParams] = useSearchParams();
   const title = params.get("title")

 useEffect(()=>{
        async function filterProduct(){
            const products = await getProduct()
            
            setProduct(products)
        }
        filterProduct()
    },
  
 [])
 
 const search = product.filter(item=> item.title.toLowerCase().includes(title)).map((item)=>
 (
     <li key={item.id} className={styles.sList}>
        <Link to={`/products/${item.id}`} className={styles.link}>
        {item.title}
        </Link> 
     
     </li>
 ))
 


    return (
        <>
       
        <div className={styles.container}>
            <h2
             style={{
           position:"relative",
           top:"100px",
           left:"30px",
           fontFamily:"sans-serif",
           color:"azure",
           fontSize:"5vh"

            }}><span className={styles.first}>J</span>evzzy online store</h2>
            <div className={styles.input}>
           
         <Search image ={img}/>
         <ul>
            {
                search
            }
         </ul>
      
            </div>
        </div>
     
        </>
    )
  
}


export default Home;