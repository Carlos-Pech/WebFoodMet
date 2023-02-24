
import React, {useEffect, useState} from 'react'
import Products from '../../components/Products';



const ListI = () => {
  const [products, setProducts] = useState([]);

  const fetchproducts=()=>{
      fetch("http://localhost:3050/api/product/")
  .then(response => response.json())
  .then(data=> setProducts(data.docs))
  .catch(error=>console.log(error))

  }
  useEffect(()=>{
      fetchproducts()
  })
  return (
    <div className='container'>

        <Products products={products}/>
    </div>
  )
}

export default ListI