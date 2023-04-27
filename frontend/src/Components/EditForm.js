import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

function EditForm({ handleEdit, selectedWorkoutItem }) {
  const [workoutItem, setWorkoutItem] = useState([selectedWorkoutItem]);
  const [ showEditModal, setShowEditModal] = useState([false])

  const handleSaveChanges = (event) => {
    event.preventDefault();
    handleEdit(selectedWorkoutItem);
    setShowEditModal(false);
    window.location.reload(); //reloads window after editing selectedWorkoutItem
  };

  return (
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Workout</Modal.Title>
        </Modal.Header>
    
          <Modal.Body>
            <Form onSubmit={handleSaveChanges}>
              <Form.Group>
                <Form.Label>Workout Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter workout name"
                  value={workoutItem.workout_name}
                  onChange={(event) =>
                    setWorkoutItem({
                      ...workoutItem,
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
                  value={workoutItem.description}
                  onChange={(event) =>
                    setWorkoutItem({
                      ...workoutItem,
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
                  value={workoutItem.equipment}
                  onChange={(event) =>
                    setWorkoutItem({
                      ...workoutItem,
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
                  value={workoutItem.image}
                  onChange={(event) =>
                    setWorkoutItem({
                      ...workoutItem,
                      image: event.target.value,
                    })
                  }
                />
                {workoutItem.image && (
                  <img
                    src={workoutItem.image}
                    alt="Workout Image Preview"
                    style={{ maxWidth: "200px" }}
                  />
                )}
              </Form.Group>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Form>
          </Modal.Body>
      </Modal>
  );
}

export default EditForm;