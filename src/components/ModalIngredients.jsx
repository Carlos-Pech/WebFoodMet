import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ModalPrueba from './Pagination';


function ModalIngredients({ isVisible, onClose }) {
    const [products, setProducts] = useState([]);


    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [familia, setFamilia] = useState("");
    const [nutrition, setNutrition] = useState("");

    const navigate = useNavigate();
    const data = {
        name: name,
        calories:calories,
        familia:familia,
        nutrition:nutrition

    };

    
    const fetchproducts = () => {
        fetch("http://localhost:3050/api/product/")
        .then((response) => response.json())
        .then((data) => setProducts(data.docs))
        .catch((error) => console.log(error));
    };
    useEffect(() => {
        fetchproducts();
    });

    if (!isVisible) return null;

  return (
<div
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex
        justify-center items-center"
        >
        <div className="w-[600px] flex flex-col">
            <button
            className="text-white text-xl
                place-self-end"
            onClick={() => onClose()}
            >
            x
            </button>
            <div className="bg-white p-2 rounded-xl text-black l">
            <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20 ">      
            <table class="w-full border-collapse bg-white text-left text-sm text-gray-500 justify-end">
            <thead class="bg-gray-50">
            <tr>
                
                <th scope="col" class="px-1 py-4 font-medium text-gray-900 justify-center text-center ">
                Ingredientes
                </th>
                
                
            </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 border-t border-gray-100 ">
           
            <ModalPrueba/>
            </tbody>
        </table>
           
            </div>
        </div>
        </div>
        </div>
  )
}

export default  ModalIngredients