function Admin() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>You are in the Admin Dashboard</h1>
      <p>Authenticated users only.</p>
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#958f8fff', borderRadius: '5px' }}>
        <h2>Admin Features</h2>
        <ul>
          <li>Manage blog posts</li>
          <li>Manage analytics</li>
          <li>Manage themes</li>
        </ul>
      </div>
    </div>
  );
}

export default Admin;