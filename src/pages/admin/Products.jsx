import React, { useEffect, useState } from "react";
import CardProcuts from "../../components/CardProcuts";
import Card from "../../components/CardProcuts";
import Pagination from "../../components/Pagination";
import { baseUrl } from "../../Services/api_url";

const Products = () => {
  const name = "Prueba";
  const price = "40";
  const img =
    "https://okdiario.com/img/recetas/2016/10/28/el-filete-perfecto.jpg";
  const desciprtion = "741";
  const [products, setProducts] = useState([]);

  const fetchproducts = () => {
    fetch(`${baseUrl}api/product/`)
      .then((response) => response.json())
      .then((data) => setProducts(data.docs))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchproducts();
  },[]);
  

  return (
    <CardProcuts></CardProcuts>
  );
};

export default Products;
