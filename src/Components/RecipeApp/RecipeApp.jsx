import React, { useState } from "react";
import "./RecipeApp.css";
import Img01 from "../../assets/sample_img.jpg";

const RecipeApp = () => {
  const [recipes, setRecipes] = useState([]);

  const apiKey = "e6b901b38d3c6d80e249f162639639a7";
  const appId = "0052b378";

  const search = async () => {
    const element = document.getElementsByClassName("input-field");
    if (element[0].value === "") {
      return 0;
    }
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${element[0].value}&app_id=${appId}&app_key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    setRecipes(data.hits);

    console.log(data.hits);
  };
  return (
    <div className="container">
      <h2 className="main-title">Mini Recipe app</h2>
      <div className="search-area">
        <input
          type="text"
          className="input-field"
          placeholder="Search For a recipe"
        />
        <button
          type="submit"
          className="submit-btn"
          onClick={() => {
            search();
          }}
        >
          Search
        </button>
      </div>
      <div className="items-wrapper">
        {recipes.map((recipe, index) => (
          <div className="card">
            <div className="card-image">
              <img src={recipe.recipe.image} alt="" className="card-img" />
              <div className="meal-type">{recipe.recipe.mealType}</div>
            </div>
            <h3 className="card-title">{recipe.recipe.label}</h3>
            <div className="tags">
              <div className="full-time">
                <i class="fa-solid fa-stopwatch"></i>{" "}
                <span className="time">{recipe.recipe.totalTime} Mins</span>
              </div>
              <div className="lo">
                <i class="fa-solid fa-earth-americas"></i>{" "}
                <span className="location">{recipe.recipe.cuisineType}</span>
              </div>
            </div>
            <div className="totalNutrients">
              <h4>
                Energy :{" "}
                <span className="energy">
                  {recipe.recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(2)}{" "}
                  kcal
                </span>
              </h4>
              <h4>
                Fat :{" "}
                <span className="fat">
                  {recipe.recipe.totalNutrients.FAT.quantity.toFixed(2)} g
                </span>
              </h4>
              <h4>
                Saturated :{" "}
                <span className="saturated">
                  {recipe.recipe.totalNutrients.FASAT.quantity.toFixed(2)} g
                </span>
              </h4>
              <h4>
                Carbo :{" "}
                <span className="carbo">
                  {recipe.recipe.totalNutrients.CHOCDF.quantity.toFixed(2)} g
                </span>
              </h4>
              <h4>
                Fiber :{" "}
                <span className="fiber">
                  {recipe.recipe.totalNutrients.FIBTG.quantity.toFixed(2)} g
                </span>
              </h4>
              <h4>
                Sugars :{" "}
                <span className="sugar">
                  {recipe.recipe.totalNutrients.SUGAR.quantity.toFixed(2)} g
                </span>
              </h4>
              <h4>
                Protein :{" "}
                <span className="protein">
                  {recipe.recipe.totalNutrients.PROCNT.quantity.toFixed(2)} g
                </span>
              </h4>
              <h4>
                Sodium :{" "}
                <span className="sodium">
                  {recipe.recipe.totalNutrients.NA.quantity.toFixed(2)} mg
                </span>
              </h4>
            </div>
            <div className="link-btn">
              <button>
                <a
                  href={recipe.recipe.url}
                  target="_blank"
                  className="item-link"
                >
                  let's cook
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="admin">
        <p>
          Created by
          <a href="https://www.upwork.com/services/product/development-it-front-end-development-for-your-design-react-js-psd-to-html-1773174959735091200?ref=project_share">
            Dhanushka Rathnayaka
          </a>
        </p>
      </div>
    </div>
  );
};

export default RecipeApp;
