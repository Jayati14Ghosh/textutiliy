import React from 'react';
import propTypes from 'prop-types';
import { Outlet, Link } from "react-router-dom";
import '../index.css';

export default function Navbar(props){
  return(
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.navbar} bg-${props.bg}`}>
        <div className="container-fluid">
          <Link className={`nav-link pe-3 text-${props.updateTextColor}`} to="/textutiliy"><b>{props.title}</b></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
             <Link className="nav-link" to="/about">{props.about}</Link>
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </div>
            <div className="ms-auto">
              <div className="d-flex">
                <div onClick={props.toggleLight} className="light-theme-round"></div>
                <div onClick={props.toggleDark} className="dark-theme-round"></div>
                <div onClick={props.toggleBlue} className="blue-theme-round"></div>
                <div onClick={props.toggleGrey} className="grey-theme-round"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
   <Outlet />
    </>
  );
};
Navbar.propTypes = {
  title: propTypes.string,
  about: propTypes.string
};
/*
Navbar.defaultProps = {
  title: "Hey",
  about: "Uh hu"
}
*/
