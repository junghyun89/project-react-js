import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { Link } from 'react-scroll';

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  function openMenu() {
    setMenuOpened(true);
  }

  function closeMenu() {
    setMenuOpened(false);
  }

  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {!menuOpened && mobile ? (
        <div className="bar-img" onClick={openMenu}>
          <img src={Bars} alt="" />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={closeMenu}
              activeClass="active"
              to="home"
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="programs" span={true} smooth={true}>
              Programs
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="reasons" span={true} smooth={true}>
              Why us
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="plans" span={true} smooth={true}>
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              to="testimonials"
              span={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              to="join-us"
              span={true}
              smooth={true}
              className={mobile ? 'show' : 'hide'}
            >
              Join-us
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
