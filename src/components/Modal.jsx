import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../Services/api_url";

function Modal({ isVisible, onClose }) {
    const [name, setName] = useState("");
    const [familia, setFamilia] = useState("");

    function submitForm(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("familia", familia);

        axios.post(`${baseUrl}ingredients/add/store`, {
            name,
            familia
        }, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                console.log(res.data);
                onClose();
                setName("");
                setFamilia("");
                window.location.reload();
            })
            .catch((err) => {
                console.error(err);
            });
    }

    if (!isVisible) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
        >
            <div className="w-[600px] flex flex-col">
                <button
                    className="text-white text-xl place-self-end"
                    onClick={() => onClose()}
                >
                    x
                </button>
                <div className="bg-white p-2 rounded-xl text-black l">
                    <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20 ">
                        <div>
                            <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
                                Agrega un Ingrediente
                            </h1>
                        </div>
                        <div className="space-y-4">
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                placeholder="Nombre del producto"
                                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                            />

                            <input
                                value={familia}
                                onChange={(e) => setFamilia(e.target.value)}
                                type="text"
                                placeholder="familia"
                                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                            />

                            <button
                                onClick={submitForm}
                                class="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg w-full text-sm"
                            >
                                Agregar ingrediente
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;

