import {useState} from 'react'
import timeOfDay from './timeofday'
import Form from './Form'
import Meal from './Meal'

function MyAccount () {
    //setting state for BMI Calculator

    return (
        <body>
            <div>
                <div>
                    {/* {timeOfDay()} */}
                </div>
                <div>
                    <h3>Welcome to your Account Dashboard</h3>
                    <p>Here you can view your account details and workout data!</p>
                </div>
                <div>
                    <h2>Personal Details</h2>
                </div>
                <div>
                    <h2>Tools</h2>
                </div>
                <div>
                    <Form />
                </div>
                <div>
                    <h2>Recipe Look-Up</h2>
                    <Meal />
                </div>
            </div>
        </body>
    )
}

export default MyAccount