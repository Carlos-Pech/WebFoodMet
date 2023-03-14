  import axios from "axios";
  import React, { useState, useEffect } from "react";
  import { useNavigate } from "react-router-dom";
import { baseUrl } from "../Services/api_url";

  const  Add=()=> {
    const [products, setProducts] = useState([]);
    
    const [products2, setProducts2] = useState([]);


      const fetchproducts2 = () => {
        fetch(`${baseUrl}api/product/`)
        .then((response) => response.json())
        .then((data) => setProducts(data.docs))
        .catch((error) => console.log(error));
        };
          useEffect(() => {
              fetchproducts2();
          });

          
      const fetchSubcategory = () => {
        fetch(`${baseUrl}subcategory/`)
        .then((response) => response.json())
        .then((data) => setProducts2(data.docs))
        .catch((error) => console.log(error));
        };
          useEffect(() => {
            fetchSubcategory();
          });





    return (
      <>
      
        <div>
          <select className="bg-black">
            {
              products.map((item,index)=>(
                <option key={index.id}value={index.id}>{item.name}</option>
              ))
            }
          </select>
        </div>
        <div>
          <select className="bg-blue-900">
            {
              products2.map((item,index)=>(
                <option key={index.id}value={index.id}>{item.name}</option>
              ))
            }
          </select>
        </div>
        
      
      </>
    
    );
  }

  export default Add;