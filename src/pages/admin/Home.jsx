import React, { useEffect, useState } from 'react'
import Products from '../admin/Products'
import Modal2 from '../../components/FormProductPUT';

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
        <Modal2 isVisible={showModal} onClose={() => setShowModal(false)} />
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none
            font-medium text-sm rounded-lg px-5 py-2.5
            text-center mr-5
            "
          onClick={() => setShowModal(true)}
        >
          Actualiza Producto
        </button>
      </div>
      <Products />
    </div>
  )
}

export default Home;