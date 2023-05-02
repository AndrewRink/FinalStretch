import { Table, Button, Modal, Form, Container, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import handleAddWorkout from "./handleAddWorkout";
import EditForm from "./EditForm"
import "../App";

function NewWorkoutForm() {
  const [showBanner, setShowBanner] = useState(false);
  const [message, setMessage] = useState("");
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
    workout_id: null

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

  async function fetchWorkoutList() {
    try {
      const response = await fetch("http://localhost:5000/workoutlist");
      const data = await response.json();
      setWorkoutItem(data);
    } catch (error) {
      console.error(error);
    }
  }

  function clearForm() {
    setNewWorkoutItem({
      workout_name: "",
      description: "",
      equipment: "",
      duration: "",
      image: "",
      workout_id: null
    });
  }


  //add button functionality 
  const handleAdd = (event) => {
    event.preventDefault();
    setShowBanner(true);
    setMessage("Exercise created successfully.")
    setTimeout(() => {
      setShowBanner(false);
    }, 2000)
    handleAddWorkout(newWorkoutItem);
    setShowAddModal(false);
    fetchWorkoutList();
    clearForm();
  };

  const handleCloseAddModal = () => {
    setShowBanner(false);
    setShowAddModal(false)
  };



  async function handleEdit(updatedWorkoutItem, workout_id) {
    const { workout_name, description, equipment, image, duration } = updatedWorkoutItem;

    try {
      const response = await fetch(`http://localhost:5000/workoutlist/${workout_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          workout_id,
          workout_name,
          description,
          equipment,
          image,
          duration
        })
      });
      if (response.ok) {
        const data = await response.json();
      console.log(data);
      setShowBanner(true);
        setMessage("Exercise updated successfully.");
      setTimeout(() => {
        setShowBanner(false);
      },2000)
      setShowEditModal(false);
      fetchWorkoutList();

      }
      

    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseEditModal = () => {
    setShowBanner(false);
    setShowEditModal(false);
  };





  //delete button functionality 
  async function handleDelete(id, setWorkoutItem, setShowBanner) {
    try {
      setShowBanner(false)
      await fetch(`http://localhost:5000/workoutlist/delete/${id}`, {
        method: "DELETE",
      });
      // Update the workoutItem state with the updated list of workouts
      const updatedWorkoutList = workoutItem.filter( //filter creates new array except the given id before updating the workoutItem state w/ SetworkoutItem
        (workout) => workout.workout_id !== id
      );
      setWorkoutItem(updatedWorkoutList);
      setMessage("Exercise deleted successfully.")
      setShowBanner(true);
      setTimeout(() => setShowBanner(false), 2000)

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Container className="new-workout-btn-container">
        <Button variant="success" onClick={() => setShowAddModal(true)}>
          New Workout
        </Button>
      </Container>
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
                  <Button variant="danger" onClick={() => handleDelete(workoutItem.workout_id, setWorkoutItem, setShowBanner)}>
                    Delete
                  </Button>
                  <div>
                    <Alert className="alert-banner" show={showBanner} variant="success" onClose={() => setShowBanner(false)} dismissible>
                      {message}
                    </Alert>
                  </div>

                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      <Modal show={showEditModal} onHide={handleCloseEditModal} >
        <Modal.Header closeButton>
          <Modal.Title>Edit Workout</Modal.Title>
        </Modal.Header>
        <EditForm handleEdit={handleEdit} selectedWorkoutItem={selectedWorkoutItem} setShowBanner={setShowBanner} showBanner={showBanner} />
      </Modal>

      <Modal show={showAddModal} onHide={handleCloseAddModal}>
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
            <Button variant="primary" type="submit" onClick={handleCloseAddModal}>
              Add
            </Button>
            <div>
              <Alert className="alert-banner" show={showBanner} variant="success" onClose={() => setShowBanner(false)} dismissible>
                {message}
              </Alert>
            </div>
          </Form>
        </Modal.Body>
      </Modal >
    </>
  )
}
export default NewWorkoutForm;