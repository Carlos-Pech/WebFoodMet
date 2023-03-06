    import axios from "axios";
    import React, { useEffect, useState } from "react";

    const FormIngredient = ({ id, nam }) => {
    const [products, setProducts] = useState([]);
    const [posts, setPosts] = useState([]);
    // const api='http://localhost:3050/ingredients/'

    const fetchproducts = () => {
        fetch("http://localhost:3050/api/product/")
        .then((response) => response.json())
        .then((data) => setProducts(data.docs))
        .catch((error) => console.log(error));
    };
    useEffect(() => {
        fetchproducts();
    }, []);

    return (
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-8">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500 justify-end">
            <thead className="bg-gray-50">
            <tr>
                <th
                scope="col"
                className="px-1 py-4 font-medium text-gray-900 justify-end text-right "
                >
                Name
                </th>
                <th
                scope="col"
                className="px-6 py-4 font-medium text-gray-900  text-end"
                >
                Price
                </th>

                {/* <th scope="col" className="px-6 py-4 font-medium text-gray-900  text-en">
                        Tipo de nutricion
                        </th> */}
                {/* <th scope="col" className="px-8 py-4 mr-[20vh] font-medium text-gray-900 text-end">
                        Calories
                        </th> */}
                <th
                scope="col"
                className="px-6 py-4 font-medium text-end ml-10 text-gray-900"
                >
                Estatus
                </th>
            </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100 ">
            {products.map((products, index) => (
                <tr className="hover:bg-gray-50">
                <th className="flex justify-end  py-4 font-normal text-blue-900">
                    <div className="">
                    <div className="font-medium text-gray-700 ">
                        {products.name}
                    </div>
                    </div>
                </th>
                {/* <td className="px-8 py-4  text-end">
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                    {products.calories}
                    </span>
                </td> */}
                <td className="px-11 text-end"> {products.price}</td>
               
                <td className="px-8 text-end"> {products.status ? "Activo" : "Inactivo"}</td>

                {/* <td className="px-12  text-end">
                    <div className="flex gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-12  py-1 text-xs font-semibold text-blue-600">
                    {products.nutrition}
                    </span>
                    </div>
                </td> */}
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
    };
    export default FormIngredient;

    // {products.map((products, index) => (
    //     <tr className="hover:bg-gray-50">
    //     <th className="flex justify-end  py-4 font-normal text-blue-900">
    //         <div className="">
    //         <div className="font-medium text-gray-700 ">{products.name}</div>
    //         </div>
    //     </th>
    //     {/* <td className="px-8 py-4  text-end">
    //         <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
    //         {products.calories}
    //         </span>
    //     </td> */}
    //     <td className="px-11 text-end"> {products.price}</td>
    //     <td className="px-11 text-end"> {products.subcategory}</td>
    //     {/* <td className="px-8 text-end"> {products.status ? "Activo" : "Inactivo"}</td> */}

    //     {/* <td className="px-12  text-end">
    //         <div className="flex gap-2">
    //         <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-12  py-1 text-xs font-semibold text-blue-600">
    //         {products.nutrition}
    //         </span>
    //         </div>
    //     </td> */}

    //     </tr>
    // ))}