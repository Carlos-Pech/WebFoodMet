import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import ModalProd from "./FormProductPUT";
import ModalElimProd from "./productDelete";
import NavePage from "./Pagination";
import { baseUrl } from "../Services/api_url";

const FormIngredient = ({ id, nam }) => {
    const [products, setProducts] = useState([]);
    const [posts, setPosts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [page, setPage] = useState(1)

    useEffect(() => {
        fetchproducts();
    }, [page]);

    const fetchproducts = () => {
        fetch(`${baseUrl}api/product/?page=${page}`)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.docs)
            })
            .catch((error) => console.log(error));
    };

    const handleUpdateClick = (id) => {
        setSelectedProductId(id);
    };

    return (
        <>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-8">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500 justify-end">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-2 py-4 font-medium text-gray-900 justify-end text-right "
                            >
                                Name
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900 ml-10 text-end"
                            >
                                Price
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-end ml-10 text-gray-900"
                            >
                                Estatus
                            </th>
                            <th
                                scope="col"
                                className="px-3 py-4 font-medium text-end ml-10 text-gray-900"
                            >
                                Fecha de Creacion
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-end ml-10 text-gray-900"
                            >
                                Accion
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100 ">
                        {products.map((products, index) => (

                            <tr className="hover:bg-gray-50">
                                <th className="flex justify-end  py-6 font-normal text-blue-900">
                                    <div className="">
                                        <div className="text-end font-medium text-gray-700 ">
                                            {products.name}
                                        </div>
                                    </div>
                                </th>
                                <td className="px-6 text-end"> {`$ ${products.price}`}</td>

                                <td className="px-6 text-end"> {products.status ? "Activo" : "Inactivo"}</td>

                                <td className="px-10 text-end">{new Date(products.createdAt).toLocaleDateString()}</td>
                                <td className="px-6 text-end">
                                    <button onClick={() => { setIsModalOpen(true); setSelectedProductId(products._id); }} style={{ color: "orange" }}><FaEdit /></button>&nbsp;&nbsp;
                                    {isModalOpen && selectedProductId === products._id && (
                                        <ModalProd
                                            isVisible={isModalOpen}
                                            onClose={() => setIsModalOpen(false)}
                                            productName={products.name}
                                            productId={selectedProductId}
                                        />
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <NavePage page={page} setPage={setPage} />
        </>
    );
};
export default FormIngredient;