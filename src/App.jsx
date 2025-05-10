import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
       <nav className='bg-red-600'>
          <ul className='flex space-x-3'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      <Outlet/>
    </div>
  );
};

export default App;