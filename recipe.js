import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ index, title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.header}>{title}</h1>
      <p>{calories}</p>
      <img className={style.image} src={image}></img>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
