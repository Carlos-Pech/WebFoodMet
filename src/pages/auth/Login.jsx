import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../Services/api_url";

function Login() {
  // const [showPassword, setShowPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Agregar estado para mostrar/ocultar la contraseña

  const handleTogglePassword = () => {
    setShowPassword(!showPassword); // Actualizar el estado para mostrar/ocultar la contraseña
  };

  const [datos, setDatos] = useState({
    username: "",
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
        let res = await axios.post(`${baseUrl}auth/login`, datos);
        console.log(res.data);
        if (res.data.token) {
          setError({ status: false, message: "" });
          localStorage.setItem("token", res.data.token);
          navigate("/home");
        } else {
          setError({
            status: true,
            message:
              "Ocurrió un error al iniciar sesión. Por favor, inténtelo de nuevo.",
          });
        }
      } catch (error) {
        if (error.response.status === 401) {
          setError({ status: true, message: "La contraseña es incorrecta" });
        } else if (error.response.status === 404) {
          setError({ status: true, message: "El usuario no existe" });
        } else {
          setError({
            status: true,
            message:
              "Ocurrió un error al iniciar sesión. Por favor, inténtelo de nuevo.",
          });
        }
      }
    }
  };

  return (
    <section className="">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74] text-center">
            Bienvenido
          </h2>
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
              <button
                type="button" // Agregar un botón de tipo "button"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none"
                onClick={handleTogglePassword} // Agregar un controlador de eventos al botón
              >
                {showPassword ? (
                  <i className="fas fa-eye-slash text-gray-400"></i> // Mostrar el ícono de "ojo tachado" si la contraseña es visible
                ) : (
                  <i className="fas fa-eye text-gray-400"></i> // Mostrar el ícono de "ojo" si la contraseña está oculta
                )}
              </button>
            </div>
            <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
              Login
            </button>
            {error.status === true && (
              <div
                className="bg-red-200 border-red-500 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <strong className="font-bold">Error:</strong>
                <span className="block sm:inline">{error.message}</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg
                    onClick={() => setError({ status: false, message: "" })}
                    className="fill-current h-6 w-6 text-red-500 cursor-pointer"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 5.652a.999.999 0 0 0-1.414 0L10 8.586 6.066 4.652a.999.999 0 1 0-1.414 1.414L8.586 10l-3.934 3.934a.999.999 0 1 0 1.414 1.414L10 11.414l3.934 3.934a.999.999 0 1 0 1.414-1.414L11.414 10l3.934-3.934a.999.999 0 0 0 0-1.414z" />
                  </svg>
                </span>
              </div>
            )}
          </form>
          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p></p>
            <Link to="register">
              <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
                Registrar
              </button>
            </Link>
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
