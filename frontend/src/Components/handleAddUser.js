function handleAddUser(newUserItem) {
    const { first_name, last_name, email, height, current_weight, goal_weight } = newUserItem;
    fetch("http://localhost:5000/userlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        height,
        current_weight,
        goal_weight
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  export default handleAddUser;