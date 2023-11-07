import React from "react";
import { NavLink } from "shared/ui/navLink/NavLink";
import './navbar.scss'
import { useTranslation } from "react-i18next";

function SwitchLng() {
    const { t, i18n } = useTranslation();
    const toggle = () => {
        i18n.changeLanguage( i18n.language === 'ru' ? 'en' : 'ru');
    }
    return <button className="btn-switchLng" onClick={toggle} >{i18n.language}</button>
}

export function Navbar () {
    const {t} = useTranslation();
    return(
        <nav className="navbar">
            <div className="logo">
                <span className="logo__text">{t('Резюме')}</span>
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
                <SwitchLng/>
            </ul>
        </nav>
    )
}