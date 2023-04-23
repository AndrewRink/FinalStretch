import { useState } from 'react'
import { Form, Button} from 'react-bootstrap'

function EditWorkoutFrom (props) {
    const [workoutName, setworkoutName] = useState(props.workouts.workout_name)
    return(
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
    )
}

export default EditWorkoutFrom