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
    <nav>
      {navLinks.map(({ id, label, icon }) => (
        <a key={id} id={id} className="nav-link" onClick={() => onNavClick(id)}>
          <i className={icon} />
          {label}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;