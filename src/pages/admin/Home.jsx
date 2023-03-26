import React, { useEffect, useState } from 'react'
import Products from '../admin/Products'
import { baseUrl } from "../../Services/api_url.jsx";
import Pagination from "../../components/Pagination.jsx";

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchproducts = () => {
    fetch(`${baseUrl}api/product/`)
      .then(response => response.json())
      .then(data => setProducts(data.docs))
      .catch(error => console.log(error))

  }
  useEffect(() => {
    fetchproducts()
  }, [])

  return (

    <div className='container'>
      <div>
      
      </div>
      <Products />
    </div>
  )
}

export default Home;