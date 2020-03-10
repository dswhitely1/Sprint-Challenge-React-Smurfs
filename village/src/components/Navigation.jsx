import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
  return (
   <nav className='navbar navbar-dark bg-dark'>
     <a className='navbar-brand mr-auto' href='/'>Smurf Village</a>
      <NavLink className='btn btn-primary mr-2' to='/'>Home</NavLink>
      <NavLink className='btn btn-outline-primary' to='/smurf-form'>Add Smurf</NavLink>
    </nav>
  );
};

export default Navigation;
