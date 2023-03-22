import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../Services/api_url";

function Modal2({ isVisible, onClose, productName }) {
    const [name, setName] = useState("");
    const [newnombre, setNewNombre] = useState("");
    const [price, setPrice] = useState("");
    const [totalCalories, setTotalCalories] = useState("");
    const [status, setStatus] = useState("");

    const navigate = useNavigate();
    const data = {
        newnombre: newnombre,
        price: price,
        totalCalories: totalCalories,
        status: status,
    };

    function submitForm(e) {
        e.preventDefault();
        axios.put(`${baseUrl}api/product/update/${name}`, data)
            .then(() => {
                onClose();
                setName("");
                setNewNombre("");
                setPrice("");
                setTotalCalories("");
                setStatus("");
            });
    }

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="w-[600px] flex flex-col">
                <button
                    className="text-white text-xl place-self-end"
                    onClick={() => onClose()}
                >

                </button>
                <div className="bg-white p-2 rounded-xl text-black l">
                    <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20 ">
                        <div>
                            <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">
                                Actualiza un producto
                            </h1>
                        </div>
                        <div class="space-y-4">
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                placeholder="Nombre del producto"
                                class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                            />
                            <input
                                value={newnombre}
                                onChange={(e) => setNewNombre(e.target.value)}
                                type="text"
                                placeholder="Nuevo nombre"
                                class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                            />
                            <input
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                type="text"
                                placeholder="price"
                                class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                            />
                            <input
                                value={totalCalories}
                                onChange={(e) => setTotalCalories(e.target.value)}
                                type="text"
                                placeholder="calorias"
                                class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                            />
                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                            >
                                <option value="">Selecciona el estatus</option>
                                <option value={true}>Activo</option>
                                <option value={false}>Inactivo</option>
                            </select>
                        </div>
                        <div class="text-center mt-6">
                            <button
                                class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg"
                                onClick={(e) => submitForm(e)}
                            >
                                Actualizar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Modal2