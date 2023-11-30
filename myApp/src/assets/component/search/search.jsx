import { useNavigate, createSearchParams} from "react-router-dom";
import { useState } from "react";


const style = {
    store_Form : {
        marginTop: '10%',
          width:'350px',
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: '3%'
      
      },
  searchBar: {
        width: '50px',
        cursor: 'pointer',
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.0)',
        border:'none'
    }
}

function Search(props){

    const [params,setParams] = useState("");
    const navigate = useNavigate();

    
  

function searchHandler(e){
e.preventDefault();

const query = {
    title:params
}
console.log(query)
const queryString =createSearchParams(query)
navigate({
    pathname:"name",
    search:`?${queryString}`

})
}



return (
    <>
    <form style ={style.store_Form} action="" onSubmit={searchHandler}>

<input  placeholder="search"  value={params}  onChange={(e) => setParams(e.target.value)}/>
<button  style={style.searchBar}>
<img
style={
{
    width:"90%",
    backgroundColor:"rgba(0,0,0,0.0)",
  
}
}
src={require(props.image)}alt="" />
</button>
</form>
    </>
)

}



export default Search