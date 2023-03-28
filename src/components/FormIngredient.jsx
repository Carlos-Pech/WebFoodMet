    import axios from "axios";
    import React, { useEffect, useState } from "react";
import { baseUrl } from "../Services/api_url.jsx";
    import Modal2 from "./FormProductPUT.jsx";
    import Modal3 from "./ModalShow.jsx";
    import NavePage from "./Pagination";
    import * as Popover from "@radix-ui/react-popover";

    const FormIngredient = ({ id, nam }) => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [showIngredientes, setShowIngredientes] = useState(false);

    // const api='http://localhost:3050/ingredients/'

    const fetchproducts = () => {
        fetch(`${baseUrl}api/product/?page=${page}`)
        .then((response) => response.json())
        .then((data) => setProducts(data.docs))
        .catch((error) => console.log(error));
    };
    useEffect(() => {
        fetchproducts();
    }, [page]);

    return (
        <>
        <p class="text-xl font-bold text-center">Pagina Actual: {page}</p>
        <NavePage page={page} setPage={setPage} />
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-8">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500 justify-end">
            <thead className="bg-gray-50">
            <tr>
            <th
                scope="col"
                className="px-1 py-4 font-medium text-gray-900 justify-end text-right "
                >
                Imagen
                </th>
                <th
                scope="col"
                className="px-1 py-4 font-medium text-gray-900 justify-end text-right "
                >
                Nombre
                </th>
                <th
                scope="col"
                className="px-1 py-4 font-medium text-gray-900 justify-end text-right "
                >
                Categoria
                </th>
                <th
                scope="col"
                className="px-1 py-4 font-medium text-gray-900 justify-end text-right "
                >
                Subcategoria
                </th>
                <th
                scope="col"
                className="px-6 py-4 font-medium text-gray-900  text-end"
                >
                Ingredientes
                </th>
                <th
                scope="col"
                className="px-6 py-4 font-medium text-gray-900  text-end"
                >
                Precio
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
                    <td className="text-end"><img class="w-12 h-12 ml-auto rounded-full" src={products.image} alt="Rounded avatar" /></td>
                <th className="flex justify-end  py-4 font-normal text-blue-900">
                    <div className="">
                    <div className="font-medium text-gray-700 ">
                        {products.name}
                    </div>
                    </div>
                </th>
                <td className="px-11 text-end">{products.category.name}</td>
                <td className="px-11 text-end"> {products.subcategory.name}</td>
                <td className="px-11 text-end">
                    <div>
                    <button
                        class="middle center rounded-lg bg-black p-2 font-sans text-xs font-bold uppercase text-white shadow-md shadow-black-500/20 transition-all hover:shadow-lg hover:shadow-grey focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true"
                        onClick={() => setShowIngredientes(true)}
                        >
                        <i class="material-icons">+</i>
                    </button>
                    <Modal3
                        isVisible={showIngredientes}
                        onClose={() => setShowIngredientes(false)}
                        />
                    </div>
                </td>
                <td className="px-11 text-end"> ${products.price}</td>

                <td
                    className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold pr-3 float-right 
                    ${
                        products.status
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-800"
                    }`}
                    >
                    <span
                    className={`h-1.5 w-1.5 rounded-full ${
                        products.status ? "bg-green-600" : "bg-red-500"
                    }`}
                    ></span>
                    {products.status ? "Activo" : "Inactivo"}
                </td>

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
        </>
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
