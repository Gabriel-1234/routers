import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import BreadCrumbs from '../conponents/BreadCrumbs';

const RootLayout = () => {
  return (
    <div className='root_layout'> 
     <header>
      <nav>
        <h1>G-TECH</h1>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="services">Services</NavLink>
        <NavLink to="careers">Careers</NavLink>
        <NavLink to="help">Contact</NavLink>
        <NavLink to="about">About us</NavLink>
       </nav>
       <BreadCrumbs/>
     </header>

     <main>
        <Outlet/>
     </main>

    </div>
  )
}

export default RootLayout
