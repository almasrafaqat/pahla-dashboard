import React from 'react'
import { Link } from 'react-router-dom';
import './navigation-links.style.css';

const NavigationLinks = () => {
  return (
    
      <ul className="navigation-links">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
   
  );
}

export default NavigationLinks