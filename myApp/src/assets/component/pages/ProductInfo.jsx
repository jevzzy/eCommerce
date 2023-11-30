import React from "react";
import "./productInfo.css"
import { useParams  } from "react-router-dom"
import { useEffect,useState } from "react"
import Get from "axios"
import getProduct from "../../mock";
import "../menu/animation.css"
function Productinfo(){
    const  {id}= useParams();
    const [product, setProduct] = useState([])
    const [isLoading,setLoad] = useState(false)

 
    useEffect(()=> {
          async function getProducts() {
            setLoad(true)
            const products = await getProduct();
            const item = products.find((product) => {
                if(product.id == parseInt(id)){
                   return product
                }
            })
            setProduct(item)
            setLoad(false)
          }
 getProducts()
       /*{Get()
        .then( response =>  {
 
    

 setLoad(false)

        })
    }*/
      
  
        },[id])
        

    return(
        isLoading?
        <div className='loader'>
        <div className='loader--dot'></div>
        <div className='loader--dot'></div>
        <div className='loader--dot'></div>
        <div className='loader--dot'></div>
        <div className='loader--dot'></div>
        <div className='loader--dot'></div>
        <div className='loader--text'></div>
      </div>
    :
        <section className="productContainer">
            <h2>{product.title}</h2>
<div>
    <img  src={product.image}/>
</div>
<fieldset><legend><h4>${product.price}</h4></legend>
<h4>{product.category}</h4>
<p>{product.description}</p>

</fieldset>




       </section>
    )
}

export default Productinfo