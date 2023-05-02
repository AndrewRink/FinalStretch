import React, { useState } from "react";
import Mealitem from "./MealItem";

const Meal = () => {
    const[search,setSearch]=useState("");
    const[Mymeal,setMeal]=useState();
    const searchMeal=(evt)=>{
        if(evt.key==="Enter")
        {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then(res=>res.json()).then(data=> {setMeal(data.meals);setSearch("")})
        }
    }
    return (
        <>
            <div className="main">
                <div className="heading">
                    <h4>Search for a list of recipes based on what you type: </h4>
                </div>
                <div className="searchBox">
                    <input type="search" className="recipe-search-bar" placeholder="Meal Name" onChange={(e)=>setSearch(e.target.value)} value={search} onKeyPress={searchMeal}/>
                </div>
                <br/>
                <div className="recipeContainer">
                   {   
                  
                    (Mymeal==null)? <p className="notSearch">Recipes will appear below!</p> : 
                         Mymeal.slice(0,6).map((res)=>{
                             return(
                            <Mealitem data={res}/>)} 
                     
                    ) 
                   
                   }
                </div>
            </div>
        </>
    )
}
export default Meal;