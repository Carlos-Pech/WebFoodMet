import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Modal3({ isVisible, onClose, productName }) {
    const [products, setProducts] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const navigate = useNavigate();

    const fetchProducts = () => {
        fetch("http://localhost:3050/api/product/")
            .then((response) => response.json())
            .then((data) => setProducts(data.docs))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (!isVisible) return null;

    const selectedProduct = products.find((product) => product.id === selectedProductId);

    const handleProductSelect = (event) => {
        const productId = parseInt(event.target.value);
        setSelectedProductId(productId);
    };

    return (
        <div className="fixed inset-0 overflow-auto bg-opacity-25 flex justify-center items-center">
            <div className="w-[600px] overflow-auto flex flex-col">
                <button className="text-black text-xl overflow-auto place-self-end" onClick={() => onClose()}>
                    x
                </button>
                <div className="bg-white p-2 rounded-xl text-black l">
                    <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                        <div>
                            <h1 class="text-3xl font-bold text-center mb-4">Ingredientes</h1>
                            <select class="block w-full text-gray-700 mb-2" onChange={handleProductSelect}>
                                <option value="">Select a product</option>
                                {products.map((product, index) => (
                                    <option value={product.id} key={index}>
                                        {product.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {selectedProduct && (
                            <div class="flex justify-center">
                                <ul class="w-96">
                                    {selectedProduct.ingredients.map((ingredient, index) => (
                                        <li
                                            class="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50 text-start"
                                            key={index}
                                        >
                                            <p>{ingredient.name}</p>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal3;
