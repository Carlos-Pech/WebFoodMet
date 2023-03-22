import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../../Services/api_url';

const Platillos = ({products}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(`${baseUrl}api/product/`);
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
