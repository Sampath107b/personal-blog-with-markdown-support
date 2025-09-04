import React from 'react'
import {Link,useNavigate} from "react-router-dom"

const Navbar = () => {
  const navigate=useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); 
  };
  const token=localStorage.getItem("token");
  return (
    <nav className='navbar'>
      <Link to='/' className='navbar-brand'>My Dev Blog</Link>

      <ul className='navbar-links'>

        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          {token && <Link to="/admin/dashboard">Dashboard</Link>}
        </li>
        <li>
          {!token ? (
            <Link to="/admin/login">Admin Login</Link>
          ) : (
            <button className='logout-btn' onClick={handleLogout}>Logout</button>
          )}
        </li>
      </ul>
      



    </nav>
  )
}

export default Navbar