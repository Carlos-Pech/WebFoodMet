import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { baseUrl } from "../Services/api_url";

function Modal3({ isVisible, onClose, productName }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const navigate = useNavigate();

  const fetchProducts = () => {
    fetch(`${baseUrl}api/product/`)
      .then((response) => response.json())
      .then((data) => setProducts(data.docs))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (!isVisible) return null;

  const filteredProduct = products.filter(product => product._id === selectedProduct)[0];




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
            </div>

            <select
              class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
            >
              <option value="" disabled selected hidden>
                Selecciona un platillo
              </option>
              {products.map((product) => (
                <option key={product._id} value={product._id}>
                  {product.name}
                </option>
              ))}
            </select>


            {filteredProduct && (
              <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-white dark:bg-white dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        Nombre Del Platillo
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Ingredientes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b dark:bg-white-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-black-900 whitespace-nowrap dark:text-black">
                        {filteredProduct.name}
                      </th>
                      <td class="px-6 py-4 text-black">
                        {filteredProduct.ingredients.map((ingredient) => ingredient.name).join(", ")}
                      </td>

                    </tr>
                  </tbody>
                </table>
              </div>
            )}


          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal3;
