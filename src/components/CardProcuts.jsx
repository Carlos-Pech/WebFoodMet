import React, { useEffect, useState } from "react";
import { RiFolderChart2Line } from "react-icons/ri";
import Modal from "./Modal";
import ModalIngredients from "./ModalIngredients";
import NavePage from "./Pagination";
import { baseUrl } from "../Services/api_url";


const CardProcuts = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);

    const fetchproducts = () => {
        fetch(`${baseUrl}api/product/?page=${page}`)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.docs)
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchproducts();
    }, [page]);

    return (
        <>
            <NavePage page={page} setPage={setPage} />
            <div className="grid gap-4 grid-cols-3 grid-rows-3">
                {products.map((products, index) => (
                    <div className="w-full p-4">
                        <div className="flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl card">
                            <div className="prod-title w-15 h-5">
                                <p className="text-sl font-bold text-gray-900 uppercase">
                                    {products.name}
                                </p>
                                <p className="text-sm text-gray-400 uppercase">{products.desciption}</p>
                            </div>
                            <br />
                            <div className=" h-28">
                                <img
                                    src={products.image}
                                    alt="#"
                                    className="object-cover object-center w-full block p-1 transition duration-300 ease-in border-2 border-white  hover:border-black h-full"
                                />
                            </div>
                            <br />
                            <div className="grid gap-10 prod-info">
                                <div>
                                    <ul className="flex flex-row items-center justify-center">
                                        <li className="mr-4 last:mr-0"></li>
                                        <button>
                                            <li className="mr-4 last:mr-0">
                                                <span className="block p-1 transition duration-300 ease-in border-2 border-white rounded-full hover:border-gray-500">
                                                    <a
                                                        href="#yellow"
                                                        className="block w-6 h-6 bg-yellow-500 rounded-full"
                                                    ></a>
                                                </span>
                                            </li>
                                        </button>
                                        <button>
                                            <li className="mr-4 last:mr-0">
                                                <span className="block p-1 transition duration-300 ease-in border-2 border-white rounded-full hover:border-gray-500">
                                                    <a
                                                        href="#red"
                                                        className="block w-6 h-6 bg-red-500 rounded-full"
                                                    ></a>
                                                </span>
                                            </li>
                                        </button>
                                        <button>
                                            <li className="mr-4 last:mr-0">
                                                <span className="block p-1 transition duration-300 ease-in border-2 border-white rounded-full hover:border-gray-500">
                                                    <a
                                                        href="#green"
                                                        className="block w-6 h-6 bg-green-500 rounded-full"
                                                    ></a>
                                                </span>
                                            </li>
                                        </button>
                                    </ul>
                                </div>
                                <div className="flex flex-col items-center justify-between text-gray-900 md:flex-row">
                                    <p className="text-xl font-bold">{products.price}</p>
                                    <button className="px-6 py-2 uppercase transition duration-200 ease-in border-2 border-gray-900 rounded-full hover:bg-gray-800 hover:text-white focus:outline-none">
                                        Detalles
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
   
        </>
    );
};

export default CardProcuts;
