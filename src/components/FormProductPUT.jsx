import axios from "axios";
import React, { useState, useEffect } from "react";

function ModalProd({ isVisible, onClose, productName, productId }) {
    const [name, setName] = useState(productName);
    const [price, setPrice] = useState("");
    const [status, setStatus] = useState("");
    const [product, setProduct] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3050/api/product/${productId}`
                );
                setProduct(response.data);
                setName(response.data.name);
                setPrice(response.data.price);
                setStatus(response.data.status);
            } catch (error) {
                console.error("Error:", error);
            }
        })();   
    }, [productId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(
                `http://localhost:3050/api/product/${productId}`,
                {
                    name,
                    price,
                    status
                }
            )
            .then(()=> {
                window.location.reload();
            })
            onClose();
        } catch (error) {
            console.error("Error:", error);
        }
    };

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
                                placeholder="Nombre"
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
                                onClick={handleSubmit}
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

export default ModalProd;