import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <nav className="header">
            <h2 className="header__logo">React Pages</h2>

            <ul className="header__menu">
                <li className="header__menu--item">
                    <NavLink
                        activeClassName="active"
                        exact
                        to="/">Counters</NavLink>
                </li>
                <li className="header__menu--item">
                    <NavLink
                        activeClassName="active"
                        to="/table"
                    >Table
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Header
