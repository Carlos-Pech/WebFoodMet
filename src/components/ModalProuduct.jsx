import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function ModalProduct({ isVisible, onClose }) {


  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [Ingredients, setIngredients] = useState("");
  const [image, setImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [ingredientes2, setingredientes2] = useState([]);
  const [numIngredients, setNumIngredients] = useState(0);
  const [selectedIngredients, setSelectedIngredients] = useState([]);


  const handleNumIngredients = (e) => {
    setNumIngredients(parseInt(e.target.value));
    setSelectedIngredients(Array(parseInt(e.target.value)).fill(''));
  };


  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedSubcategory('');
    const filteredSubcategories = subcategories.filter(subcategory =>
      subcategory.category === e.target.value);
    setSubcategories(filteredSubcategories);
  };


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

  
  function submitForm(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", selectedCategory);
    formData.append("subcategory", selectedSubcategory);
    formData.append("price", price);
    formData.append("Ingredients", selectedIngredients.join(','));
    formData.append("image", image);
    axios.post("http://localhost:3050/api/product/store", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(() => {
        onClose();
        setName("");
        setCategories([]);
        setSubcategories([]);
        setPrice("");
        setSelectedIngredients([]);
        setImage(null);
      });
  }
  if (!isVisible) return null;
  return (
    <div
      className="fixed inset-0 overflow-auto bg-black bg-opacity-25
backdrop-blur-sm flex justify-center items-center"
    >
      <div className="w-[600px] h-[600px] overflow-auto flex flex-col">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          x
        </button>
        <div className="bg-white p-2 overflow-auto rounded-xl
text-black l">
          <div class="py-12 px-12 bg-white overflow-auto rounded-2xl
shadow-xl z-20 ">
            <div>
              <h1 class="text-3xl font-bold overflow-auto text-center
mb-4 cursor-pointer">
                Agrega un producto
              </h1>
            </div>
            <div class="space-y-4">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Nombre del producto"
                class="block text-sm py-3 px-4 rounded-lg w-full border
outline-none"
              />
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                placeholder="Precio"
                class="block text-sm py-3 px-4 rounded-lg w-full border
outline-none"
              />
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="block text-sm py-3 px-4 rounded-lg w-full
border outline-none"
              >
                <option value="">Selecciona una categoría</option>
                {categories.map(category => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <select
                value={selectedSubcategory}
                onChange={(e) =>
                  setSelectedSubcategory(e.target.value)}
                className="block text-sm py-3 px-4 rounded-lg w-full
border outline-none"
              >
                <option value="">Selecciona una subcategoría</option>
                {subcategories.map(subcategory => (
                  <option key={subcategory._id}
                    value={subcategory._id}>
                    {subcategory.name}
                  </option>
                ))}
              </select>
              <p align="left">Eliga la cantidad de ingredientes a
                agregar</p>
              <input
                type="number"
                value={numIngredients}
                onChange={handleNumIngredients}
                class="block text-sm py-3 px-4 rounded-lg w-full border
outline-none"
              />
              {selectedIngredients.map((ingredient, index) => (
                <select
                  key={index}
                  value={ingredient}
                  onChange={(e) =>
                    setSelectedIngredients(prevIngredients => {
                      prevIngredients[index] = e.target.value;
                      return [...prevIngredients];
                    })}
                  class="block text-sm py-3 px-4 rounded-lg w-full
border outline-none"
                >
                  <option value="" disabled>Selecciona un
                    ingrediente</option>
                  {ingredientes2.map((ingredient) => (
                    <option key={ingredient._id}
                      value={ingredient._id}>{ingredient.name}</option>
                  ))}
                </select>
              ))}
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                class="block text-sm py-3 px-4 rounded-lg w-full border
outline-none"
              />
              <button
                onClick={submitForm}
                class="bg-orange-500 hover:bg-orange-600 text-white
py-2 px-4 rounded-lg w-full text-sm"
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