import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [datos, setDatos] = useState({
    username: "", // cambiar "email" a "username"
    password: "",
  });

  const navigate = useNavigate();

  const [error, setError] = useState({
    status: false,
    message: "",
  });

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    let newDatos = { ...datos, [name]: value };
    setDatos(newDatos);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      console.log("no enviar");
    } else {
      try {
        let res = await axios.post("http://localhost:3050/auth/login", datos);
        console.log(res.data);
        setError({ status: false, message: "" });
        localStorage.setItem("token", res.data.token);
        navigate("/home");
      } catch (error) {
        if (error.response.status === 404) {
          setError({ status: true, message: "El usuario no existe" });
        } else {
          setError({ status: true, message: "la contraseña es incorrecta" });
        }
      }
    }
  };

  return (
    <section className="">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74] text-center">Bienvenido</h2>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
            noValidate={true}
          >
            <input
              className="p-2 mt-8 rounded-xl border text-black"
              type="text"
              name="username" // cambiar "email" a "username"
              placeholder="Nombre de usuario"
              onChange={handleInputChange}
              value={datos.username} // cambiar "email" a "username"
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full  text-black"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                onChange={handleInputChange}
                value={datos.password}
              />
            </div>
            <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
              Login
            </button>
            {error.status === true && (
              <div
                class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                {error.message}
              </div>
            )}
          </form>
          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p></p>
            <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
              Registrar
            </button>
          </div>
        </div>

        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl"
            src="https://imagenes.elpais.com/resizer/nxVW078RjpmuJop6SVqP2RYQ2og=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/S32L3HG7ONGMRFBTX3IYC7FR6I.jpg"
          />
        </div>
      </div>
    </section>
  );
}

export default Login;