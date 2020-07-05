import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-sm bg-light justify-content-center">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/search">Search</Link>
                </li>
            </ul>
        </nav>
    );

}
export default NavBar;
