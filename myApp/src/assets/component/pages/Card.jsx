import  styles from "./Card.module.css"
import {Link} from "react-router-dom"


function Card(props){
    return (
        <li  className={styles.container} >
            <h3 className={styles.price}>${props.price}</h3>
        <Link to={`/products/${props.id}`}><img className={styles.pics} src={props.url} /></Link>
      
<button className={styles.btn} 

 onClick={props.event}  id={props.id}>Add to cart</button>
      


        </li>
    )
}

export default Card