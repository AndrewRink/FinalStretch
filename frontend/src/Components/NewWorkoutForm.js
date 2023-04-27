import { Table, Button, Modal, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import handleAddWorkout from "./handleAddWorkout";
import EditForm from "./EditForm"
import "../App.css";


function NewWorkoutForm() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [workoutItem, setWorkoutItem] = useState([]);
  const [selectedWorkoutItem, setSelectedWorkoutItem] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newWorkoutItem, setNewWorkoutItem] = useState({
    workout_name: "",
    description: "",
    equipment: "",
    duration: "",
    image: "",

  });

  //fetches data from localhost. Once the data is recieved it is converted to JSON and stored in the data variable using setWorkoutItem.
  useEffect(() => {
    fetch("http://localhost:5000/workoutlist")
      .then((response) => response.json())
      .then((data) => {
        setWorkoutItem(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //add button functionality 
  const handleAdd = (event) => {
    event.preventDefault();
    handleAddWorkout(newWorkoutItem);
    setShowAddModal(false);
    window.location.reload();//reloads window after adding newWorkout
  };

  const handleEdit = async (updatedWorkoutItem) => {
    try {
      await fetch(`http://localhost:5000/workoutlist/${updatedWorkoutItem.workout_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedWorkoutItem),
      });

      // Update the workoutItem state with the updated workout item
      const updatedWorkoutItemList = workoutItem.map((workoutItem) => {
        if (workoutItem.workout_id === updatedWorkoutItem.workout_id) {
          return updatedWorkoutItem;
        }
        return workoutItem;
      });

      setWorkoutItem(updatedWorkoutItemList);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditModalClose = (event) => {
    setSelectedWorkoutItem(null);
    setShowEditModal(false);
    
  };

 


  //delete button functionality 
  async function handleDelete(id, setWorkoutItem) {
    try {
      await fetch(`http://localhost:5000/workoutlist/${id}`, {
        method: "DELETE",
      });
      // Update the workoutItem state with the updated list of workouts
      const updatedWorkoutList = workoutItem.filter( //filter creates new array except the given id before updating the workoutItem state w/ SetworkoutItem
        (workout) => workout.workout_id !== id
      );
      setWorkoutItem(updatedWorkoutList);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="new-workout-btn-container">
        <Button variant="success" onClick={() => setShowAddModal(true)}>
          New Workout
        </Button>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Client</th>
            <th>Workout Name</th>
            <th>Description</th>
            <th>Equipment</th>
            <th>Duration</th>
            <th>Image</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {workoutItem.length > 0 &&
            workoutItem.map((workoutItem) => (
              <tr key={workoutItem.workout_id}>
                <td>{workoutItem.workout_id}</td>
                <td>{workoutItem.workout_name}</td>
                <td>{workoutItem.description}</td>
                <td>{workoutItem.equipment}</td>
                <td>{workoutItem.duration}</td>
                <td><img src={workoutItem.image} alt="Workout" style={{ maxWidth: "200px" }} /></td>

                <td>
                  <Button variant="primary" onClick={() => {
                    setSelectedWorkoutItem(workoutItem);
                    setShowEditModal(true);
                  }}>
                    Edit
                  </Button>
                </td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(workoutItem.workout_id, setWorkoutItem)}>Delete</Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      <Modal.Header closeButton onClick={handleEditModalClose}>          
       <Modal show={showEditModal}>
          <EditForm workoutItem={selectedWorkoutItem} onEdit={handleEdit} />
      </Modal> 
      </Modal.Header>

      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>New Workout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAdd}>
            <Form.Group>
              <Form.Label>Workout Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter workout name"
                value={newWorkoutItem.workout_name}
                onChange={(event) =>
                  setNewWorkoutItem({
                    ...newWorkoutItem,
                    workout_name: event.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                value={newWorkoutItem.description}
                onChange={(event) =>
                  setNewWorkoutItem({
                    ...newWorkoutItem,
                    description: event.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Equipment</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter equipment"
                value={newWorkoutItem.equipment}
                onChange={(event) =>
                  setNewWorkoutItem({
                    ...newWorkoutItem,
                    equipment: event.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image URL"
                value={newWorkoutItem.image}
                onChange={(event) =>
                  setNewWorkoutItem({
                    ...newWorkoutItem,
                    image: event.target.value,
                  })
                }
              />
              {newWorkoutItem.image && <img src={newWorkoutItem.image} alt="Workout" />}
            </Form.Group>
            <Form.Group>
              <Form.Label>Duration (in minutes)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter duration"
                value={newWorkoutItem.duration}
                onChange={(event) =>
                  setNewWorkoutItem({
                    ...newWorkoutItem,
                    duration: event.target.value,
                  })
                }
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>

  )
}
export default NewWorkoutForm;