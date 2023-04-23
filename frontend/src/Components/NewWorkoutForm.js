import { Table, Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import '../App.css';


function NewWorkoutForm() {
  const [showAddModal, setShowAddModal] = useState(false);

  const handleCloseAddModal = () => setShowAddModal(false);
  const handleShowAddModal = () => setShowAddModal(true);

  const handleAddWorkout = () => {
    // logic to add new workout
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Author ID</th>
            <th>Workout Name</th>
            <th>Equipment needed</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Leg Day</td>
            <td>Barbell, Dumbbell, Squat Rack</td>
            <td>Leg day workout targeting quadriceps and hamstrings</td>
            <td>60 mins</td>
            <td>
              <Button variant="primary">Edit</Button>
            </td>
            <td>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        </tbody>
        <div className="new-workout-btn-container">
        <Button variant="success" onClick={handleShowAddModal}>
          New Workout
        </Button>
      </div>
      </Table>
      <Modal show={showAddModal} onHide={handleCloseAddModal}>
  <Modal.Header closeButton>
    <Modal.Title className="text-center mb-4">Add New Workout</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <Form>
    <Form.Group controlId="formWorkoutName">
  <Form.Label>Workout Name</Form.Label>
  <Form.Control type="text" placeholder="Enter workout name" style={{height: "50px", width: "100%"}} />
</Form.Group>

<Form.Group controlId="formEquipmentNeeded">
  <Form.Label>Equipment needed</Form.Label>
  <Form.Control type="text" placeholder="Enter equipment needed" style={{height: "50px", width: "100%"}} />
</Form.Group>

<Form.Group controlId="formWorkoutDescription">
  <Form.Label>Description</Form.Label>
  <Form.Control as="textarea" rows={3} placeholder="Enter workout description" style={{height: "100px", width: "100%"}} />
</Form.Group>

<Form.Group controlId="formWorkoutDuration">
  <Form.Label>Duration</Form.Label>
  <Form.Control type="text" placeholder="Enter workout duration" style={{height: "50px", width: "100%"}} />
</Form.Group>
    </Form>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="primary" onClick={handleAddWorkout}>
      Add Workout
    </Button>
  </Modal.Footer>
</Modal>
    </>
  );
}

export default NewWorkoutForm;