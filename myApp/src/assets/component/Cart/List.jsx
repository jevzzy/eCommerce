import { useState } from "react"
import "../Cart/List.css"

function List(props){
    const [count , setCount] = useState(0)

    function increase(){
        setCount(() => count + 1)
    }
    
    function reduce(){
        setCount(()=> count - 1)
    }
    
 
    
    return (
        <div >
            
        <h5>{props.title}</h5>
        <h6>${props.price}</h6>
        <div className="btnCont">
        <div ><button onClick={reduce} >-</button>{count}<button onClick={increase}>+</button></div>
        <button id={props.id} className="remBtn" onClick={props.remove}>remove</button>
        </div>
        
    
<hr></hr>
        </div>
    )
}


export default List