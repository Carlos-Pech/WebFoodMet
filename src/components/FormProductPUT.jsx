import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Modal2({ isVisible, onClose, productName }) {
    const [name, setName] = useState("");
    const [newnombre, setNewNombre] = useState("");
    const [price, setPrice] = useState("");
    const [status, setStatus] = useState("");

    const navigate = useNavigate();
    const data = {
        newnombre: newnombre,
        price: price,
        status: status,
    };

    function submitForm(e) {
        e.preventDefault();
        axios.put(`http://localhost:3050/api/product/update/${name}`, data)
            .then(() => {
                onClose();
                setName("");
                setNewNombre("");
                setPrice("");
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
                    x
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
                                class="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-600"
                                placeholder="Nombre actual"
                            />
                            <input
                                value={newnombre}
                                onChange={(e) => setNewNombre(e.target.value)}
                                type="text"
                                class="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-600"
                                placeholder="Nuevo nombre"
                            />
                            <input
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                type="text"
                                class="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-600"
                                placeholder="Precio"
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
                        <div class="flex justify-center mt-6">
                            <button
                                class="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700"
                                onClick={submitForm}
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

export default Modal2;