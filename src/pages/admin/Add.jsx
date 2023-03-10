import React from "react";
import Carrrito from "../../components/Carrrito";

const Add = ({ products = [] }) => {
    return (

        <div className="grid gap-4 grid-cols-3 grid-rows-3">
            <div className="w-full p-4">
                <div className="flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl card">
                    {products.map((item, index) => (

                        <Carrrito>
                            name={item.name}
                        </Carrrito>

                    ))}
                </div>
            </div>
        </div>

    );
};

export default Add;