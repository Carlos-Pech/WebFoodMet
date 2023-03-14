import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Platillos = ({products}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios('http://localhost:3050/api/product/');
        setData(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  return(
    <>
    <div>
      Aqui va para agregar los plaillos
    </div>
    </>
  )
  
};

export default Platillos;