import React from "react";
import { NavLink } from "shared/ui/navLink/NavLink";
import './navbar.scss'
export function Navbar () {
    return(
        <nav className="navbar">
            <div className="logo">
                <span className="logo__text">Resume</span>
            </div>
            <ul className="navbar__items">
                <li className="navbar-item">
                    <NavLink selector="navbar-item__link" href="#about" text="About"/>
                </li>
                <li className="navbar-item">
                    <NavLink selector="navbar-item__link" href="#skills" text="Skills"/>
                </li>
                <li className="navbar-item">
                    <NavLink selector="navbar-item__link" href="#experiences" text="Experiences"/>
                </li>
                <li className="navbar-item">
                    <NavLink selector="navbar-item__link" href="#portfolio" text="Portfolia"/>
                </li>
                <li className="navbar-item">
                    <NavLink selector="navbar-item__link" href="#footer" text="Contact"/>
                </li>
            </ul>
        </nav>
    )
}