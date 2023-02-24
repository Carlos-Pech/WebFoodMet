import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

function ModalProduct({ isVisible, onClose }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [ingredientes2, setingredientes2] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);



  const navigate = useNavigate();

  const fetchCategories = () => {
    fetch("http://localhost:3050/category/add")
      .then((response) => response.json())
      .then((data) => setCategories(data.docs))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchSubcategories = () => {
    fetch("http://localhost:3050/subcategory/add")
      .then((response) => response.json())
      .then((data) => setSubcategories(data.docs))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchSubcategories();
  }, []);

  const fetchIngredients = () => {
    fetch("http://localhost:3050/ingredients/add")
      .then((response) => response.json())
      .then((data) => setingredientes2(data.docs))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchIngredients();
  }, []);

  //aqui se mapean los ingredientes disponibles en el db para que aparezcan en el select, el valor que se selecciona es el id del ingrediente y se despliega el name
  const ingredientOptions = ingredientes2.map((ingredient) => ({
    value: ingredient._id,
    label: ingredient.name,
    calories: ingredient.calories // Agregar la propiedad de calorías
  }));

  const selectedIngredientsWithCalories = selectedIngredients.map(ingredient => {
    const { label, calories } = ingredient;
    return { name: label, calories: calories || 0 };
  });





  function submitForm(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('category', selectedCategory);
    formData.append('subcategory', selectedSubcategory);
    formData.append('price', price);
    formData.append('Ingredients', JSON.stringify(selectedIngredientsWithCalories));
    formData.append('image', image);

    axios.post('http://localhost:3050/api/product/store', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        onClose();
        setName('');
        setCategories([]);
        setSubcategories([]);
        setPrice('');
        setingredientes2([]);
        setImage(null);
      });
  }

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 overflow-auto bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="w-[600px] overflow-auto flex flex-col">
        <button
          className="text-white text-xl overflow-auto place-self-end"
          onClick={() => onClose()}
        >
          x
        </button>
        <div className="bg-white p-2 rounded-xl  text-black l">
          <div class="py-12 px-12 bg-white rounded-2xl  shadow-xl z-20">
            <div>
              <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">
                Agrega un producto
              </h1>
            </div>
            <div class="space-y-4">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Nombre del producto"
                class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              />

              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                placeholder="Precio"
                class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              >
                <option value="" disabled>Selecciona una categoría</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>{category.name}</option>
                ))}
              </select>
              <select
                value={selectedSubcategory}
                onChange={(e) => setSelectedSubcategory(e.target.value)}
                class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              >
                <option value="" disabled>Selecciona una subcategoría</option>
                {subcategories.map((subcategory) => (
                  <option key={subcategory._id} value={subcategory._id}>{subcategory.name}</option>
                ))}
              </select>

              <Select
                name="ingredients"
                isMulti
                options={ingredientOptions}
                value={selectedIngredients}
                onChange={(selectedOptions) => {
                  console.log('Selected options:', selectedOptions);
                  setSelectedIngredients(selectedOptions);
                }}
              />

              {selectedIngredients.map((ingredient) => (
                <div key={ingredient.value}>
                  <label htmlFor={`calories-${ingredient.value}`}>{ingredient.label} Calories:</label>
                  <input
                    id={`calories-${ingredient.value}`}
                    type="number"
                    min="0"
                    step="0.01"
                    onChange={(e) => {
                      // Actualizar el valor de calorías en la opción seleccionada
                      setSelectedIngredients((prevSelectedIngredients) =>
                        prevSelectedIngredients.map((prevIngredient) => {
                          if (prevIngredient.value === ingredient.value) {
                            return {
                              ...prevIngredient,
                              calories: parseFloat(e.target.value)
                            };
                          }
                          return prevIngredient;
                        })
                      );
                    }}
                  />
                </div>
              ))}

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              >
                <option value="" disabled>Selecciona el estatus</option>
                <option value={true}>Activo</option>
                <option value={false}>Inactivo</option>
              </select>

              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              />

              <button
                onClick={submitForm}
                class="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg w-full text-sm"
              >
                Agregar producto
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalProduct;