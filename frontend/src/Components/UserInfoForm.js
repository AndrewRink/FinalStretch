import { Table, Button, Modal, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import handleAddWorkout from "./handleAddWorkout";
import "../App.css";


function NewUserForm() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [userItem, setUserItem] = useState([]);
  const [selectedUserItem, setSelectedUserItem] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newUserItem, setNewUserItem] = useState({
    first_name: "",
    last_name: "",
    email: "",
    height: "",
    current_weight: "",
    goal_weight: "",

  });

  //fetches data from localhost. Once the data is recieved it is converted to JSON and stored in the data variable using setWorkoutItem.
  useEffect(() => {
    fetch("http://localhost:5000/userlist")
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
    handleAddUser(newUserItem);
    setShowAddModal(false);
    window.location.reload();//reloads window after adding newWorkout
  };

//   const handleEdit = async (updatedWorkoutItem) => {
//     try {
//       await fetch(`http://localhost:5000/workoutlist/${updatedWorkoutItem.workout_id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(updatedWorkoutItem),
//       });

//       // Update the workoutItem state with the updated workout item
//       const updatedWorkoutItemList = workoutItem.map((workoutItem) => {
//         if (workoutItem.workout_id === updatedWorkoutItem.workout_id) {
//           return updatedWorkoutItem;
//         }
//         return workoutItem;
//       });

//       setWorkoutItem(updatedWorkoutItemList);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleEditModalClose = (event) => {
//     setSelectedWorkoutItem(null);
//     setShowEditModal(false);
    
//   };

 


//   //delete button functionality 
//   async function handleDelete(id, setWorkoutItem) {
//     try {
//       await fetch(`http://localhost:5000/workoutlist/${id}`, {
//         method: "DELETE",
//       });
//       // Update the workoutItem state with the updated list of workouts
//       const updatedWorkoutList = workoutItem.filter( //filter creates new array except the given id before updating the workoutItem state w/ SetworkoutItem
//         (workout) => workout.workout_id !== id
//       );
//       setWorkoutItem(updatedWorkoutList);
//     } catch (error) {
//       console.error(error);
//     }
//   }

  return (
    <>
      <div className="new-user-btn-container">
        <Button variant="success" onClick={() => setShowAddModal(true)}>
          Enter New User Data
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
            {/* <th>Edit</th>
            <th>Delete</th> */}
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

      {/* <Modal.Header closeButton onClick={handleEditModalClose}>          
       <Modal show={showEditModal}>
          <EditForm workoutItem={selectedWorkoutItem} onEdit={handleEdit} />
      </Modal> 
      </Modal.Header> */}

      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAdd}>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                value={newUserItem.first_name}
                onChange={(event) =>
                  setNewUserItem({
                    ...newUserItem,
                    first_name: event.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                value={newUserItem.last_name}
                onChange={(event) =>
                  setUserItem({
                    ...newUserItem,
                    last_name: event.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>E-Mail</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter E-mail Address"
                value={newUserItem.email}
                onChange={(event) =>
                  setNewUserItem({
                    ...newUserItem,
                    email: event.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Height</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Height in inches"
                value={newUserItem.height}
                onChange={(event) =>
                  setUsertItem({
                    ...newUserItem,
                    height: event.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Current Weight</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Current Weight"
                value={newUserItem.duration}
                onChange={(event) =>
                  setUserItem({
                    ...newUserItem,
                    current_weight: event.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Goal Weight</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Goal Weight"
                value={newUserItem.duration}
                onChange={(event) =>
                  setUserItem({
                    ...newUserItem,
                    goal_weight: event.target.value,
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