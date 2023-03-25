import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../Services/api_url";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Modal({ isVisible, onClose }) {

    const [archivos, setArchivos] = useState(null)
    const subirArchivos = () => {
        setArchivos(e)

    }
    const insertarArchivos = () => {
        const f = new FormData();
    }





    const [name, setName] = useState("");
    const [familia, setFamilia] = useState("");
    const [nutrition, setNutrition] = useState("");
    const [calories, setCalories] = useState("");
    const [unidad, setUnidad] = useState("");

    const navigate = useNavigate();
    const notify = () => toast.success("Ingrediente Agregado!");
    const data = {
        name: name,
        familia: familia,
        calories: calories,
        unidad: unidad



    };

    function submitForm(e) {
        e.preventDefault();
        axios.post(`${baseUrl}ingredients/add/store`, data)
            .then(() => {
                notify();
                setName("");
                setFamilia("");
                setCalories("");
                setUnidad("");
            });

    }

    if (!isVisible) return null;

    return (

        <div
            className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex
        justify-center items-center"
        >
            <div className="w-[600px] flex flex-col">
                <button
                    className="text-white text-xl
                place-self-end"
                    onClick={() => onClose()}
                >
                    x
                </button>
                <div className="bg-white p-2 rounded-xl text-black l">
                    <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20 ">
                        <div>
                            <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">
                                Agrega un ingrediente
                            </h1>

                        </div>
                        <div class="space-y-4">
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                placeholder="Nombre del ingrediente"
                                class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                            />
                            {<input
                                value={calories}
                                onChange={(e) => setCalories(e.target.value)}
                                type="number"
                                placeholder="Calorias por unidad"
                                class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                            />}
                            <input
                                value={familia}
                                onChange={(e) => setFamilia(e.target.value)}
                                type="text"
                                placeholder="Familia u Origen"
                                class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                            />
                            <select
                                value={unidad}
                                onChange={(e) => setUnidad(e.target.value)}
                                class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                            >
                                <option value="" disabled>Selecciona la unidad de medida</option>
                                <option value={"Mililitros"}>Mililitros</option>
                                <option value={"Gramos"}>Gramos</option>
                            </select>
                            {/* <input
                    value={nutrition}
                    onChange={(e) => setNutrition(e.target.value)}
                    type="text"
                    placeholder="Tipo de nutricion"
                    class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                /> */}
                        </div>
                        <div class="text-center mt-6">
                            <button class="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl" onClick={submitForm}>
                                Agregar ingrediente
                            </button>
                            <ToastContainer
                                position="top-center"
                                autoClose={5000}
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
};

export default Modal;