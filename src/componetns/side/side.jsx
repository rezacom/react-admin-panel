import React from "react";
// import logo from '../../images/logo.svg';
import HomeIcon from '@material-ui/icons/Home';
import AppleIcon from '@material-ui/icons/Apple';
import PersonIcon from '@material-ui/icons/Person';
import {Link} from "react-router-dom";

export default function Nav() {

    const handleMouseEnter = () => {
        // document.querySelectorAll('.side__nav-item').classList.add('side__nav-item-hover');
        [...document.querySelectorAll('.side__nav-item')].map(item => {
            item.classList.add('side__nav-item-hover');
        })
    }

    const handleMouseDown = () => {
        // document.querySelectorAll('.side__nav-item').classList.remove('side__nav-item-hover');
        if(document.getElementById('side').classList.contains('side-active'))
            return
        [...document.querySelectorAll('.side__nav-item')].map(item => {
            item.classList.remove('side__nav-item-hover');
        })
    }

  return (
    <div className="side" id="side" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseDown}>
      <div className="side__logo">
          <AppleIcon />
        {/* <img src={logo} className="side__logo-img" alt="logo" /> */}
      </div>
      
      <nav className="side__nav">
          <ul className="side__nav-items">
              <li className="side__nav-item">
                  <Link to="/">
                      <HomeIcon />
                      <span>Home</span>
                  </Link>
              </li>
              <li className="side__nav-item">
                  <Link to="/profile">
                      <PersonIcon />
                      <span>profile</span>
                  </Link>
              </li>
              <li className="side__nav-item">
                  <a href="#">
                      <HomeIcon />
                      <span>Home</span>
                  </a>
              </li>
              <li className="side__nav-item">
                  <a href="#">
                      <HomeIcon />
                      <span>Home</span>
                  </a>
              </li>
              <li className="side__nav-item">
                  <a href="#">
                      <HomeIcon />
                      <span>Home</span>
                  </a>
              </li>
          </ul>
      </nav>
    </div>
  );
}
