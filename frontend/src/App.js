import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

//Components
import Home from './Components/Home';
import LoginPage from './Components/LoginPage'
import WorkoutList from './Components/WorkoutList'
import MyAccount from './Components/MyAccount';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Container>
          <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Final Stretch</Navbar.Brand>
            <Nav className='Nav' defaultActiveKey='/'>
                <Nav.Link href='/workoutlist'>List of Workouts</Nav.Link>
                <Nav.Link href='/myaccount'>My Account</Nav.Link>
                <Nav.Link href='/login'>Login</Nav.Link>
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
