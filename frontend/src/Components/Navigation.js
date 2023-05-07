import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CurrentUser } from '../context/CurrentUser';

function Navigation() {
  const navigate = useNavigate();
  const { currentUser } = useContext(CurrentUser);

  let loginActions = (
    <>
      <li style={{ float: 'right' }}>
        <Link to="/sign-up">Sign Up</Link>
      </li>
      <li style={{ float: 'right' }}>
        <Link to="/login">Login</Link>
      </li>
    </>
  );

  if (currentUser) {
    loginActions = (
      <li style={{ float: 'right' }}>
        Logged in as {currentUser.firstName} {currentUser.lastName}
      </li>
    );
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/workoutlist">WorkoutList</Link>
        </li>
        <li>
          <Link to="/myaccount">MyAccount</Link>
        </li>
        {loginActions}
      </ul>
    </nav>
  );
}

export default Navigation;