import React, { useEffect, useState } from "react";
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
    const [theme, setTheme] = useState('light');
    const root = document.querySelector('#root');
    function switchTheme() {
        setTheme(theme == 'light' ? 'dark' : 'light');
        console.log(theme);
        
    }
    useEffect(() => {
        root.classList.remove('dark');
        root.classList.add(theme);
        document.querySelector('#root').classList.add(theme);
    }, [theme])
    return(
        <nav className="navbar">
            <div className="logo">
                <span className="logo__text">{t('Резюме')}</span>
            </div>
            <ul className="navbar__items">
                <li className="navbar-item">
                    <NavLink selector="navbar-item__link" href="#about" text={t('Обо мне')}/>
                </li>
                <li className="navbar-item">
                    <NavLink selector="navbar-item__link" href="#skills" text={t('Навыки')}/>
                </li>
                <li className="navbar-item">
                    <NavLink selector="navbar-item__link" href="#experiences" text={t('Опыт работы')}/>
                </li>
                <li className="navbar-item">
                    <NavLink selector="navbar-item__link" href="#portfolio" text={t('Портфолио')}/>
                </li>
                <li className="navbar-item">
                    <NavLink selector="navbar-item__link" href="#footer" text={t('Связаться')}/>
                </li>
                <SwitchLng/>
                <li className="navbar-item" onClick={switchTheme}>
                    <span className="navbar-item__switch">Тёмная</span>
                </li >
            </ul>
        </nav>
    )
}