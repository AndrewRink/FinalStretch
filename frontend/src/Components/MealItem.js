import React from "react";
import { Card } from 'react-bootstrap';

const Mealitem=(getMeal)=>{
    console.log(getMeal.data)
    return(
        <>
             <Card className="recipeCard" style={{ width: '14rem' }}>
                <Card.Body>
                        <Card.Title>{getMeal.data.strMeal}</Card.Title>
                        <Card.Img className="food-image" src={getMeal.data.strMealThumb} alt="meal"/>
                        <Card.Text>{getMeal.data.strArea}</Card.Text>
                        <Card.Title>Recipe</Card.Title>
                        <a href={getMeal.data.strSource}>Link to Full Recipe</a>
                </Card.Body>
            </Card>  
        </>
    )
}
export default Mealitem;