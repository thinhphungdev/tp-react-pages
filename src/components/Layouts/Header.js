import React from 'react'

function Header() {
    return (
        <nav className="header">
            <h2 className="header__logo">React Pages</h2>

            <ul className="header__menu">
                <li className="header__menu--item">Counters</li>
                <li className="header__menu--item">Table</li>
            </ul>
        </nav>
    )
}

export default Header
