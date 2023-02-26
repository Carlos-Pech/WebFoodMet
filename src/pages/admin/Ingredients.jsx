import React, { useEffect, useState } from "react";
import FormIngredients from "../../components/FormIngredient";
import Modal2 from "../../components/FormIngredientsPUT";
import axios from 'axios';

import Modal from "../../components/Modal";

const Ingredients = () => {
    const [data, setData] = useState([]);

    const [showModal, setShowModal] = useState(false);
    const [showModal1, setShowModal1] = useState(false);

    return (
        <div className="text-end">
        <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
        <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none
            font-medium text-sm rounded-lg px-5 py-2.5
            text-center mr-5
            "
            onClick={() => setShowModal(true)}
        >
            Agregar Ingredientes
        </button>

        <FormIngredients />
        </div>
    );
};

export default Ingredients;
