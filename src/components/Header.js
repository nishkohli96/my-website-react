import React from 'react';
import { Link } from 'react-router-dom';
import RoutePaths from '@Constants/RoutePaths';
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <div className="app-header navbar fixed">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <div className="hidden sm:inline-block col-span-1">
          <Link to="/">
            <img src={logo} alt="logo" className="w-10 h-10 md:w-15 md:h-15" />
          </Link>
        </div>

        <div className="col-span-2 sm:text-right">
          <div className="navlink link">
            <Link to={RoutePaths.home}>Home</Link>
          </div>
          <div className="navlink link">
            <Link to={RoutePaths.projects}>Projects</Link>
          </div>
          <div className="navlink link">
            <Link to={RoutePaths.contact}>Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
