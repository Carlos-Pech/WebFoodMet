import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

function ModalProduct({ isVisible, onClose }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("");
  const [nutrition, setNutrition] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [ingredientes2, setingredientes2] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);



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
    fetch("http://localhost:3050/ingredients/add/todo")
      .then((response) => response.json())
      .then((data) => setingredientes2(data.docs))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchIngredients();
  }, []);

  useEffect(() => {
    function calculateTotalCalories() {
      let calories = 0;
      selectedIngredients.forEach((ingredient) => {
        calories += ingredient.calories * ingredient.weight;
      });
      setTotalCalories(calories);
    }

    calculateTotalCalories();
  }, [selectedIngredients]);

  const ingredientOptions = ingredientes2.map((ingredient) => ({
    value: ingredient._id,
    name: ingredient.name,
    calories: ingredient.calories,
    unidad: ingredient.unidad,
    weight: ingredient.weight

  }));
  const subcategoryOptions = subcategories
  .filter((subcategory) => subcategory.category === selectedCategory)
  .map((subcategory) => ({
    value: subcategory._id,
    name: subcategory.name,
  }));




  function submitForm(e) {
    e.preventDefault();
    const data = {
      "name": name,
      "description": description,
      "price": price,
      "nutrition": nutrition,
      "category": selectedCategory,
      "subcategory": selectedSubcategory,
      "inCart": false,
      "time": time,
      "ingredients": selectedIngredients,
      "totalCalories": totalCalories,
      "image": image,
    }
    axios.post("http://localhost:3050/api/product/store", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(() => {
        onClose();
        setName("");
        setSelectedCategory([]);
        setSelectedSubcategory([]);
        setPrice("");
        setTime("");
        setNutrition([]);
        setDescription("");
        setSelectedIngredients([]);
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
            <div class="relative">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
                maxlength="40"
                pattern="^[A-Za-z\s]+$"
                placeholder="Nombre del producto"
                class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              />
              <span class="absolute bottom-1 right-3 text-gray-400 text-sm">{name.length}/40</span>
              </div>
              <div class="relative">
                <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  required
                  maxlength="100"
                  pattern="^[A-Za-z\s]+$"
                  
                  placeholder="Descripcion del producto"
                  class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                />
                <span class="absolute bottom-1 right-3 text-gray-400 text-sm">{description.length}/100</span>
              </div>

              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                required
              
                placeholder="Precio"
                class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              />
              <input
                value={time}
                onChange={(e) => setTime(e.target.value)}
                type="number"
                required
                max="180"
                placeholder="Tiempo de preparacion (minutos)"
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
                {subcategoryOptions.map((subcategory) => (
                  <option key={subcategory.value} value={subcategory.value}>{subcategory.name}</option>
                ))}
              </select>

              <Select
                options={ingredientOptions}
                value={selectedIngredients}
                onChange={(options) => {
                  setSelectedIngredients(options);
                }}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder="Selecciona los ingredientes..."
                isMulti
                isSearchable
                getOptionLabel={(option) => `${option.name} (${option.unidad})`}
                getOptionValue={(option) => option.value}
                formatOptionLabel={(option) => (
                  <div>
                    <span>{option.name}</span>
                    <span className="text-gray-400 ml-2">
                      ({option.calories} calorías/{option.unidad})
                    </span>
                    <input
                      type="number"
                      min="1"
                      placeholder={option.unidad}
                      value={option.weight}
                      className="ml-2 border rounded-md p-1 w-24"
                      onChange={(e) => {
                        const newIngredients = selectedIngredients.map((ingredient) => {
                          if (ingredient.value === option.value) {
                            return {
                              ...ingredient,
                              weight: e.target.value,
                            };
                          }
                          return ingredient;
                        });
                        setSelectedIngredients(newIngredients);
                      }}
                    />
                  </div>
                )}
              />

              <select
                value={nutrition}
                onChange={(e) => setNutrition(e.target.value)}
                class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              >
                <option value="" disabled>Selecciona el tipo de nutricion</option>
                <option value={true}>Vegano</option>
                <option value={false}>No Vegano</option>
              </select>

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
                disabled={!(name, description) || !(name.match(/^[A-Za-z\s]+$/), description.match(/^[A-Za-z\s]+$/))}
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