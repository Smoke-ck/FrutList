import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import './Navigation.scss';

function Navigation() {
    return (
        <>
            <ul className="navigation">
                <li className="navigation__item">
                    <NavLink to="/" className="navigation__link" activeClassName="navigation__active">Fruit</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to="/bascet" className="navigation__link" activeClassName="navigation__active">Shopping cart</NavLink>
                </li>
            </ul>
        </>
    )
}

export default Navigation
