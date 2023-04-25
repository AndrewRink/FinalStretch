import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

//Components
import Home from './Components/Home';
import LoginPage from './Components/LoginPage'
import WorkoutList from './Components/WorkoutList'
import MyAccount from './Components/MyAccount';
import './App.css';




function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Navbar bg="light" expand="lg">
            <Nav className='Nav' defaultActiveKey='/'>
                <Link to='/'>Home</Link>
                <Link to='/workoutlist'>List of Workouts</Link>
                <Link to='/myaccount'>My Account</Link>
                <Link to='/login'>Login</Link>
            </Nav>
          </Navbar>
          </Container>
          
          <div className='display'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/workoutlist' element={<WorkoutList />} />
              <Route path='/myaccount' element={<MyAccount />} />
              <Route path='/login' element={<LoginPage />} />
            </Routes>
          </div>
        </Router>
    </div>

    
  );
}

export default App;
