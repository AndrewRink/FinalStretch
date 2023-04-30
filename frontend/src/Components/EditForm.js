import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import "../App.css";

function EditForm({ handleEdit, selectedWorkoutItem }) {
  const [workout_name, setWorkout_name] = useState(selectedWorkoutItem.workout_name);
  const [description, setDescription] = useState(selectedWorkoutItem.description);
  const [equipment, setEquipment] = useState(selectedWorkoutItem.equipment);
  const [duration, setDuration] = useState(selectedWorkoutItem.duration);
  const [image, setImage] = useState(selectedWorkoutItem.image);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedWorkoutItem = { workout_name, description, equipment, duration, image };
    handleEdit(updatedWorkoutItem, selectedWorkoutItem.workout_id);
    window.location.reload();
  };

  return (
    <Modal.Body>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Workout Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter workout name"
            value={workout_name}
            onChange={(event) =>
              setWorkout_name(event.target.value)
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            value={description}
            onChange={(event) =>
              setDescription(event.target.value)
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Equipment</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter equipment"
            value={equipment}
            onChange={(event) =>
              setEquipment(event.target.value)
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter image URL"
            value={image}
            onChange={(event) =>
              setImage(event.target.value)
            }
          />
          {image} && (
          <img
            src={image}
            alt="Workout Image Preview"
            style={{ maxWidth: "200px" }}
          />
          )
        </Form.Group>
        <Form.Group>
          <Form.Label>Duration (in minutes)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Duration"
            value={duration}
            onChange={(event) =>
              setDuration(event.target.value)
            }
          />
        </Form.Group>
        <Button variant="primary" type="submit" >
          Save Changes
        </Button>
      </Form>
    </Modal.Body>
  );
}

export default EditForm;