async function getProduct(){
    const product = await fetch('https://fakestoreapi.com/products',{
        method:'GET'
    })
   const data = await product.json()
   return data
}


function updateCart(id){
    
}

export default getProduct