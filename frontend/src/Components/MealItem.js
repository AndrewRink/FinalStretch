import React from "react";

const Mealitem=(getMeal)=>{
    console.log(getMeal.data)
    return(
        <>
             <div className="recipeCard">
                        <h2>{getMeal.data.strMeal}</h2>
                        <img src={getMeal.data.strMealThumb} alt="meal"/>
                        <div className ="recipeInfo">
                        <p>{getMeal.data.strArea} food</p>
                        </div>
                        <div className ="recipeInstr">
                            <h2>Recipe</h2>
                            <p>{getMeal.data.strInstructions}</p>
                            <a href={getMeal.data.strSource}>Watch video</a>
                        </div>
            </div>  
        </>
    )
}
export default Mealitem;