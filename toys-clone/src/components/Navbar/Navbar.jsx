import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { links, social } from './navData';

const Navbar = () => {
  const [toggleActive, setToggleActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (toggleActive) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [toggleActive]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  });

  useEffect(() => {
    (windowWidth < 800) ? setToggleActive(false) : setToggleActive(true)
  }, [windowWidth]);

  return (
    <div className="nav-container">
      <div className="nav-header">
        <h2>AnJung</h2>
        <button
          className="nav-toggle"
          onClick={() => setToggleActive(!toggleActive)}
        >
          {toggleActive ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className="links-container" ref={linksContainerRef}>
        <ul className="links" ref={linksRef}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}></a>
                {text}
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="social-icons">
        {social.map((socialIcon) => {
          const { id, url, icon } = socialIcon;
          return (
            <li key={id}>
              <a target="_blank" href={url}>
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
