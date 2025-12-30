import { useNavigate } from 'react-router-dom';
import {useAuth} from '../context/AuthContext';

function Login() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/');
  };
  
  if  (isAuthenticated) {
    return (
      <div style={{padding: '20px'}}>
        <h1>You are logged in.</h1>
      </div>
    );
  }
  
  return (
    <div style={{ padding: '20px' }}>
      <h1>Login</h1>
      <p>Click the button to log in.</p>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}
export default Login;