import { useState } from 'react'
import { Form, Button} from 'react-bootstrap'
//workout_name, description, image, duration
function EditWorkoutFrom (props) {
    const [workoutName, setworkoutName ] = useState(props.workoutItem.workout_name)
    const [ description, setDescription] = useState(props.workoutItem.description)
    const [ image, setImage ] = useState(props.workoutItem.image)
    const [ duration, setDuration ] = useState(props.workoutItem.duration)

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedWorkoutItem ={
        workout_name: workoutName,
        description: description,
        image: image,
        duration: duration,
    };
    props.handleEdit(props.workoutItem.id, updatedWorkoutItem)
    };

    const handleClick = (event) => {
        event.stopPropagation();
    }
    
    return(
        <Modal show={showAddModal} onHide={handleCloseAddModal}>
  <Modal.Header closeButton>
    <Modal.Title className="text-center mb-4">Add New Workout</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <Form>
    <Form.Group controlId="formWorkoutName">
  <Form.Label>Workout Name</Form.Label>
  <Form.Control type="text" placeholder="Enter workout name" 
  style={{height: "50px", width: "100%"}} 
  value= {workoutName} 
  onChange={(e) => setworkoutName(e.target.value)}/>
</Form.Group>

<Form.Group controlId="formEquipmentNeeded">
  <Form.Label>Equipment needed</Form.Label>
  <Form.Control type="text" placeholder="Enter equipment needed" 
  style={{height: "50px", width: "100%"}} 
  />
</Form.Group>

<Form.Group controlId="formWorkoutDescription">
  <Form.Label>Description</Form.Label>
  <Form.Control as="textarea" rows={3} placeholder="Enter workout description" style={{height: "100px", width: "100%"}} />
</Form.Group>

<Form.Group controlId="formWorkoutImage">
  <Form.Label>Image</Form.Label>
  <Form.Control type="file" style={{ height: "50px", width: "100%" }} />
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