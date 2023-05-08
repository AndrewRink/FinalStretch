import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'



//Components
import Home from './Components/Home';
import WorkoutList from './Components/WorkoutList'
import MyAccount from './Components/MyAccount';
import NewUserForm from './Components/NewUserForm';
import NewLoginForm from './Components/NewLoginForm'
import { UserContext } from './Components/UserContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const updateEmail = (newEmail) => {
    setEmail(newEmail);
  };

  const updatePassword = (newPassword) => {
    setPassword(newPassword);
  };

  return (
    <UserContext.Provider value={{ email, password, updateEmail, updatePassword }}>
      <div className='App'>
      <Router>
      
        <Container>
          <Navbar style={{ backgroundColor: '#84A98C' }} expand="lg">
            <Navbar.Brand href="/home">
            <img id='brand' alt="logo" src='../Final.png' />
          </Navbar.Brand>   
            <Nav className='Nav' defaultActiveKey='/Login'>
                <Nav.Link href='/workoutlist'>List of Workouts</Nav.Link>
                <Nav.Link href='/myaccount'>My Account</Nav.Link>
                <Nav.Link href='/newuser'>New User Sign-Up</Nav.Link>
                <Nav.Link href='/Login'>Login</Nav.Link>
            </Nav>
          </Navbar>
          </Container>
         
          <div className='display'>
            <Routes>              
              <Route exact path='/' element={<NewLoginForm />}/>
              <Route exact path='/home' element={<Home />}/>
              <Route exact path='/workoutlist' element={<WorkoutList />} />
              <Route exact path='/myaccount' element={<MyAccount />} />
              <Route exact path='/newuser' element={<NewUserForm />} />
              <Route exact path='/Login' element={<NewLoginForm />} />
             
            </Routes>
          </div>
          
        </Router>
        
    </div>
    </UserContext.Provider>
    
  );
}

export default App;
