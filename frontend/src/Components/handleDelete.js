
const handleDelete = (workout_id, setWorkoutItem, workoutItem, history) => {
    fetch(`http://localhost:5000/workout/${workout_id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // update workoutItem list after deleting
        const updatedList = workoutItem.filter((workoutItem) => workoutItem.workout_id !== workout_id);
        setWorkoutItem(updatedList);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  export default handleDelete;