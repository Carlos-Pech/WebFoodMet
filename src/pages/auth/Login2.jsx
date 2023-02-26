import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  RiMailLine,
  RiLock2Line,
  RiEyeFill,
  RiEyeOffLine,
} from "react-icons/ri";

const Login2 = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const [datos, setDatos] = useState({
    name: "",
    password: "",
    email: "",
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
      // let res = await axios.post(Apiurl, datos);
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
    <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[400px]">
      <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
        iniciar sesion
      </h1>
      <form className="mb-8" onSubmit={handleSubmit} noValidate={true}>
        <button className="flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full rounded-full mb-8 text-gray-100">
          <img
            src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
            className="w-4 h-4"
          />
          Ingresa con google
        </button>
        <div className="relative mb-4">
          <RiMailLine
            className="absolute top-1/2 -translate-y-1/2 left-2 text-primary
            "
          />
          <input
            type="text"
            className="py-2 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
            placeholder="Correo electronico"
            name="email"
            onChange={handleInputChange}
            value={datos.email}
          ></input>
        </div>

        <div className="relative mb-4">
          <RiLock2Line
            className="absolute top-1/2 -translate-y-1/2 left-2 text-primary
            "
          />
          <input
            type={showPassword ? "text" : "password"}
            className="py-2 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
            placeholder="Password"
            name="password"
            onChange={handleInputChange}
            value={datos.password}
          ></input>
          {showPassword ? (
            <RiEyeOffLine
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
            />
          ) : (
            <RiEyeFill
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
            />
          )}
        </div>
        <div className="p-2">
          <button
            type="submit"
            className="bg-primary text-w uppercase font-bold text-sm w-full py-3 px-4 rounded-lg hover:text-gray-100 transition-colors"
          >
            Ingresar
          </button>
        </div>
        {error.status === true && (
          <div
            class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            {error.message}
          </div>
        )}
      </form>
      <div className="flex flex-col items-center gap-4">
        <Link to="/" className="hover:text-primary transition-colors">
          ¿Olvidaste tu contraseña?
        </Link>
        <span className="flex items-center gap-2">
          ¿No tienes cuenta?
          <Link
            to="/auth/registro"
            className="text-primary hover:text-gray-100 transition-colors"
          >
            Registrar
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login2;
