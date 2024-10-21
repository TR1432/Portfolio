import React from 'react';

const Navbar = ({ onNavClick, current_page }) => {
  const navLinks = [
    { id: 'Home', label: 'Home', icon: 'home-icon' },
    { id: 'Projects', label: 'Projects', icon: 'projects-icon' },
    { id: 'About', label: 'About', icon: 'about-icon' },
    { id: 'Resume', label: 'Resume', icon: 'resume-icon' },
    { id: 'Contact', label: 'Contact', icon: 'contact-icon' }
  ];

  return (
    <nav className='container row position-absolute top-0 start-50 translate-middle'>
      {navLinks.map(({ id, label, icon }) => (
        <div 
        key={id} 
        id={id} 
        role="button" 
        className={id === current_page ? "highlight col nav-link mt-auto mb-auto ms-2 me-2" : "col nav-link mt-auto mb-auto ms-2 me-2"} 
        onClick={() => onNavClick(id)} 
        tabIndex={0}
      >
        <i className={icon} />
        {label}
      </div>
      ))}
    </nav>
  );
};

export default Navbar;