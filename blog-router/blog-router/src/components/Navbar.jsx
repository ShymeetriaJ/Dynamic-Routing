import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav style={{ 
      padding: '20px', 
      backgroundColor: '#333', 
      color: 'white'
      }}>
    <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
     }}>
      <div>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}>
          Home
        </Link>
        <Link to="/blog" style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}>
          Blog
        </Link>
        {isAuthenticated && (
          <Link to="/admin" style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}>
            Admin
          </Link>
        )}
      </div>
      
      <div>
        {isAuthenticated ? (
          <button onClick={logout} style={{ padding: '8px 16px', cursor: 'pointer' }}>
            Log Out
          </button>
        ) : (
          <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>
            Log In
          </Link>
        )}
      </div>
    </div>
  </nav>
  );
}

export default Navbar;