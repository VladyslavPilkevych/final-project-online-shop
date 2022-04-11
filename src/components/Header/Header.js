import React from 'react';
import styles from './Header.module.scss';
import { NavLink } from "react-router-dom";

const Header = () => {
    const activeStyle = {
        opacity: "0.5",
        cursor: "default",
        pointerEvents: "none",
    };
    return (
        <header>
            <ul>
                <li>
                    <NavLink style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    } to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    } to="/sign-in">Sign-in</NavLink>
                </li>
                <li>
                    <NavLink style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    } to="/cart">Cart</NavLink>
                </li>
                <li>
                    <NavLink style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    } to="/favourite">Favourite</NavLink>
                </li>
            </ul>
        </header >
    );
};

export default Header;
