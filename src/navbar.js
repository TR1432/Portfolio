import React from 'react';

const Navbar = ({ onNavClick }) => {
  const navLinks = [
    { id: 'Home', label: 'Home', icon: 'home-icon' },
    { id: 'Project', label: 'Project', icon: 'project-icon' },
    { id: 'Blogs', label: 'Blogs', icon: 'blog-icon' },
    { id: 'Resume', label: 'Resume', icon: 'resume-icon' },
    { id: 'Contact', label: 'Contact', icon: 'contact-icon' }
  ];

  return (
    <nav className='container row position-absolute top-0 start-50 translate-middle'>
      {navLinks.map(({ id, label, icon }) => (
        <a key={id} id={id} className="col nav-link mt-auto mb-auto ms-2 me-2" onClick={() => onNavClick(id)}>
          <i className={icon} />
          {label}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;