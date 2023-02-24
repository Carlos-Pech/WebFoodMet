import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function  Modal  ({ isVisible, onClose }){

    const [archivos, setArchivos]= useState(null)
    const subirArchivos =()=>{
        setArchivos(e)

    }
    const insertarArchivos = ()=>{
    const f = new FormData();
    }





    const [name, setName] = useState("");
    const [familia, setFamilia] = useState("");
    const [nutrition, setNutrition] = useState("");

    const navigate = useNavigate();
    const data = {
        name: name,
       familia:familia

    };

    function submitForm(e) {
        e.preventDefault();
        axios.post("http://localhost:3050/ingredients/add/store", data)
        .then(() => {
            onClose();
            onClose();
            setName("");
            setFamilia("");
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
                {/* <input
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    type="text"
                    placeholder="Calories"
                    class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                /> */}
                <input
                    value={familia}
                    onChange={(e) => setFamilia(e.target.value)}
                    type="text"
                    placeholder="Familia u Origen"
                    class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                />
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
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Modal;
