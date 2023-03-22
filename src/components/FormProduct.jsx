import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../Services/api_url";
import Modal2 from "./Modal_Actualizar_Producto";

const FormIngredients = ({ id, nam }) => {

    const [products, setProducts] = useState([]);
    const [posts, setPosts] = useState([])
    const api = `${baseUrl}ingredients/`

    const fetchproducts = () => {
        fetch(`${baseUrl}ingredients/add/`)
            .then((response) => response.json())
            .then((data) => setProducts(data.docs))
            .catch((error) => console.log(error));
    };
    useEffect(() => {
        fetchproducts();
    }, []);




    return (
        <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-8">
            <table class="w-full border-collapse bg-white text-left text-sm text-gray-500 justify-end">
                <thead class="bg-gray-50">
                    <tr>

                        <th scope="col" class="px-1 py-4 font-medium text-gray-900 justify-end text-right ">
                            Name
                        </th>
                        {/* <th scope="col" class="px-6 py-4 font-medium text-gray-900  text-end">
                Caloriass 
                </th> */}
                        <th scope="col" class="px-6 py-4 font-medium text-gray-900  text-end">
                            Familia u Origen
                        </th>
                        <th scope="col" class="px-6 py-4 font-medium text-gray-900  text-end">
                            Calorias
                        </th>
                        <th scope="col" class="px-6 py-4 font-medium text-gray-900  text-end">
                            Unidad
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-4 font-medium text-end ml-10 text-gray-900"
                        >
                            Estatus
                        </th>
                        {/* <th scope="col" class="px-6 py-4 font-medium text-gray-900  text-en">
                Tipo de nutricion
                </th> */}



                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-100 border-t border-gray-100 ">
                    {products.map((products, index) => (
                        <tr class="hover:bg-gray-50">
                            <th class="flex justify-end  py-4 font-normal text-blue-900">
                                <div class="">
                                    <div class="font-medium text-gray-700 ">{products.name}</div>
                                </div>
                            </th>
                            {/* <td class="px-8 py-4  text-end">
                    <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                    {products.calories}
                    </span>
                </td> */}
                            <td class="px-11 text-end"> {products.familia}</td>
                            <td class="px-11 text-end"> {products.calories}</td>
                            <td class="px-11 text-end"> {products.unidad}</td>
                            <td className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold pr-3 float-right 
                ${products.status ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-800'}`}>
                                <span className={`h-1.5 w-1.5 rounded-full ${products.status ? 'bg-green-600' : 'bg-red-500'}`}></span>
                                {products.status ? "Activo" : "Inactivo"}
                            </td>


                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default FormIngredients;
