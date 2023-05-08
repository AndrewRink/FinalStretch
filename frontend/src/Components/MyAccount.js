import React, {useContext} from 'react'
import Form from './Form'
import Meal from './Meal'
import { UserContext } from './UserContext'

function MyAccount () {
    //setting state for BMI Calculator
    const { email } = useContext(UserContext);
    return (
        <body className='accountPage'>
            <div>
                <div className='accountHeading'>
                    <h3>Welcome to your Account Dashboard</h3>
                    <p>Here you can view your account details and workout data!</p>
                    
            
                </div>
                    <div className='personalDetails'>
                        <h2>Personal Details</h2>
                    </div>
                        <div className='aboutMe'>
                            <p>Email: {email}</p>
                        </div>
                    <div className='preferredWorkouts'>
                        <div>
                            <h2>List of your preferred workouts</h2>
                            <p>table of saved workouts</p>
                        </div>
                    </div>
                    <div className='tools'>
                        <h2>Tools</h2>
                    </div>
                        <div className='bmiCalc'>
                            {/* Adds BMI Calculator */}
                            <Form />
                        </div>
                        <div className='recipeSearch'>
                            <h2>"Stretch" those cooking muscles!</h2>
                            {/* Adds Recipe Search Function */}
                            <Meal />
                        </div>
            </div>
        </body>
    )
}

export default MyAccount