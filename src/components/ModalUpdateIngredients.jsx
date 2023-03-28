import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../Services/api_url";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Modal4({ isVisible, onClose, ingredientName }) {
    const [ingredients, setIngredients] = useState([]);
    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [status, setStatus] = useState("");
    const [selectedIngredient, setSelectedIngredient] = useState("");

    const navigate = useNavigate();
    const notify = () => toast.success(`Ingrediente (${name}) actualizado!`);
    const data = {
        name: name,
        calories: calories,
        status: status,
    };
    const fetchingredients = () => {
        fetch(`${baseUrl}ingredients/add/`)
            .then((response) => response.json())
            .then((data) => setIngredients(data.docs))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchingredients();
    }, []);

    if (!isVisible) return null;

    function submitForm(e) {
        e.preventDefault();
        axios.put(`${baseUrl}ingredients/add/${selectedIngredient}`, data)
            .then(() => {
                notify();
                setSelectedIngredient("")
                setName("");
                setCalories("");
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
                                Actualiza un Ingrediente
                            </h1>
                        </div>
                        <div class="space-y-4">
                            <select
                                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                value={selectedIngredient}
                                onChange={(e) => setSelectedIngredient(e.target.value)}
                            >
                                <option value="" disabled selected hidden>
                                    Selecciona un ingrediente
                                </option>
                                {ingredients.map((ingredient) => (
                                    <option key={ingredient._id} value={ingredient._id}>
                                        {ingredient.name}
                                    </option>
                                ))}
                            </select>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                class="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-600"
                                placeholder="Nuevo nombre"
                            />
                            <input
                                value={calories}
                                onChange={(e) => setCalories(e.target.value)}
                                type="text"
                                class="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-600"
                                placeholder="Calorias por unidad"
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
                            <ToastContainer
                                position="top-center"
                                autoClose={2000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal4;