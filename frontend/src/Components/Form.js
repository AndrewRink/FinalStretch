import React, { useState } from "react";
import TextInput from "./TextInput";
import { Card } from "react-bootstrap";
import BmiButton from "./BmiButton"


const App = () => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState();
  const [bmiClass, setBmiClass] = useState();

  const handleHeightChange = (event) => setHeight(event.target.value);
  const handleWeightChange = (event) => setWeight(event.target.value);

  const computeBmi = () => {
    let bmiValue = 703 * (weight / (height * height)).toFixed(2);
    setBmi(bmiValue);
    let bmiClass = getBmi(bmiValue);
    setBmiClass(bmiClass);
    setHeight("")
    setWeight("")
  };

  const getBmi = (bmi) => {
    
    if (bmi < 18.5) {
      return "Underweight";
    }
    if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight";
    }
    if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    }
    if (bmi >= 30) {
      return "Obesity";
    }
  };

  return (
    <div>
        <Card className="bmiContainer">
          <h2>BMI Calculator!</h2>
          <Card.Text className="row">
              <TextInput
              label="Height"
              placeholder="Enter height in inches"
              handleChange={handleHeightChange}
              value={height}/>
          </Card.Text>
          <Card.Text className="row">
              <TextInput
              label="Weight"
              placeholder="Enter weight in pounds"
              handleChange={handleWeightChange}
              value={weight}/>
          </Card.Text>
          <Card.Text className="row">
              <BmiButton label="CALCULATE" onClick={computeBmi} />
          </Card.Text>
          <Card.Text className="row">
              {
              isNaN(bmi)?null:<h3>Your BMI = {bmi}</h3> 
              }
          </Card.Text>
          <Card.Text className="row">
              <h3>{bmiClass}</h3>
          </Card.Text>
        </Card >
    </div>
  );
};

export default App;