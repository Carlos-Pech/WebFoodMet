    import React, { useState } from "react";
    import axios from "axios";
import { baseUrl } from "../../Services/api_url";

    const RegisterPage = () => {
    const [userData, setUserData] = useState({
        username: "",
        // name: '',
        // lastname: '',
        email: "",
        password: "",
    });

    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
        .post(`${baseUrl}/user/store`, userData)
        .then((response) => {
            console.log(response);
            // manejar la respuesta de la API aquí, por ejemplo, redirigir al usuario a otra página
        })
        .catch((error) => {
            console.log(error.response);
            if (error.response.status === 400) {
            setError(error.response.data.error);
            } else {
            setError("Error interno del servidor");
            }
        });
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
  <div className="py-4 px-6">
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
          Nombre de usuario:
        </label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Correo electrónico:
        </label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
          Contraseña:
        </label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Registrarse
        </button>
      </div>
    </form>
  </div>
</div>
    );
};

    export default RegisterPage;
