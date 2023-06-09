function handleAddWorkout(newWorkoutItem,setShowBanner) {
    const { workout_name, description, equipment, image, duration } = newWorkoutItem;
    fetch("http://localhost:5000/workoutlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        workout_name,
        equipment,
        description,
        image,
        duration
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setShowBanner(true)
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  
  export default handleAddWorkout;