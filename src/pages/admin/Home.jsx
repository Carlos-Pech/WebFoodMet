
import React, { useEffect, useState } from 'react'
import Products from '../admin/Products'
import Modal2 from '../../components/FormProductPUT';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchproducts = () => {
    fetch("http://localhost:3050/api/product/")
      .then(response => response.json())
      .then(data => setProducts(data.docs))
      .catch(error => console.log(error))

  }
  useEffect(() => {
    fetchproducts()
  }, [])
  const [showModal, setShowModal] = useState(false);

  return (

    <div className='container'>
      <div>
      </div>
      <Products />
    </div>
  )
}

export default Home;