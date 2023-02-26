import React, { useEffect, useState } from "react";
import FormProducts from "../../components/FormProduct";
import ModalProduct from "../../components/ModalProuduct";
import axios from 'axios';


const ProductAdd = () => {
    const [data, setData] = useState([]);

    const [showModal, setShowModal] = useState(false);
    const [showModal1, setShowModal1] = useState(false);
    return (
        <div className="text-end">
            <ModalProduct isVisible={showModal} onClose={() => setShowModal(false)} />
            <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none
            font-medium text-sm rounded-lg px-5 py-2.5
            text-center mr-5
            "
                onClick={() => setShowModal(true)}
            >
                Agregar producto
            </button>
            <FormProducts />
        </div>
    );
};

export default ProductAdd;
