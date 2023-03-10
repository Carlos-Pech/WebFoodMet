import React, { useEffect, useState } from "react";
import FormIngredients from "../../components/FormIngredients";
import Modal from "../../components/Modal";

const Ingredients = () => {
    const [data, setData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //     try {
    //         const result = await axios("http://localhost:3050/ingredients/");
    //         setData(result.data);
    //         console.log(data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    //     };
    //     fetchData();
    // }, []);

    const [showModal, setShowModal] = useState(false);
    return (
        <div className="text-end">
        <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none
            font-medium text-sm rounded-lg px-5 py-2.5
            text-center mr-5
            "
            onClick={() => setShowModal(true)}
        >
            Agregar Ingredientes
        </button>
        <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
        <FormIngredients />
        </div>
    );
};

export default Ingredients;