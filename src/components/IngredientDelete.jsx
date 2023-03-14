import axios from "axios";
import React, { useState, useEffect } from "react";
import { baseUrl } from "../Services/api_url";

function ModalElimIngre({ isVisible, onClose, productId }) {

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`${baseUrl}ingredients/add/${productId}`);
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
                                Quieres eliminar este producto?
                            </h1>
                        </div>
                        <div class="flex justify-center mt-6">
                            <button
                                class="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700"
                                onClick={handleSubmit}
                            >
                                Aceptar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalElimIngre;