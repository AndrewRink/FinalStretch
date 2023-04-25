import { Table, Button, Modal, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import handleAddWorkout from "./handleAddWorkout";
import handleDelete from "./handleDelete"
import "../App.css";

function NewWorkoutForm() {
  const [workoutItem, setWorkoutItem] = useState([]);
  const [selectedWorkoutItem, setSelectedWorkoutItem] = useState(null);
  const  [showEditModal, setShowEditModal ] = useState([]);
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
    fetch("http://localhost:5000/workout")
      .then((response) => response.json())
      .then((data) => {
        setWorkoutItem(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleAdd = (event) => {
    event.preventDefault();
    handleAddWorkout(newWorkoutItem);
    setShowAddModal(false);
    window.location.reload();
  };
  
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
                <td>{workoutItem.image}</td>
                
                <td>
                  <Button
                    variant="primary"
                    onClick={() => {
                      setSelectedWorkoutItem(workoutItem);
                      setShowEditModal(true);
                    }}
                  >
                    Edit
                  </Button>
                </td>
                <td>
                <Button variant="danger" onClick={() => handleDelete(workoutItem.workout_id)}>Delete</Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
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
  );
}
export default NewWorkoutForm;