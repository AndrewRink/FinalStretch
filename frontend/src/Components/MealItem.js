import React from "react";

const Mealitem=(getMeal)=>{
    console.log(getMeal.data)
    return(
        <>
             <div className="card">
                        <h2>{getMeal.data.strMeal}</h2>
                        <img src={getMeal.data.strMealThumb} alt="meal"/>
                        <div className ="info">
                        <p>{getMeal.data.strArea} food</p>
                        </div>
                        <div className ="recipe">
                            <h2>Recipe</h2>
                            <p>{getMeal.data.strInstructions}</p>
                            <a href={getMeal.data.strSource}>Watch video</a>
                        </div>
            </div>  
        </>
    )
}
export default Mealitem;