import '../App.css';
import React from 'react'

function Home (props) {
    return (
    <div>  
        <div className="homeBody">
            <h1>Welcome to The Final Stretch, {props.userName}</h1>
            <img id="homeLogo" src= 'https://www.usnews.com/cmsmedia/13/7c/a9774d7f410785fa055cf06a6ffd/140707-seniorsexercise-stock.jpg'  alt="logo"/>
            <h2>Embrace a healthier lifestyle! Unlock the best you!</h2>
            <p>Thank you for choosing us to accompany you on your health and wellness journey!</p>
            <p>Our program offers a wide range of exercises. From beginner workouts to more advanced exercise techniques, we have something to offer everyone!</p>
        </div>
        <br />
        <div className="disclaimer">
            <h6>DISCLAIMER</h6>
            <p>Before beginning any type of exercise program, you should first consult your physician to determine if this program is right for you, particularly anyone with underlying medical conditions,
                including, but not limited to, high blood pressure or heart disease.  
                If you feel chest pain, faint, or shortness of breath while exercising, please stop and contact your physician immediately. 
                Any information on this site, inlcuding health, diet, or fitness, is designed for educational purposes and should never replace a professional medical advice or treatment.
                If you have any concerns while using the program, please contact your physician.</p>

        </div>

    </div>
    )
}

export default Home