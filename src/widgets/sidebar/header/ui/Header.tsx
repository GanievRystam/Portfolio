import React from "react";
import { Navbar } from "widgets/sidebar/ui/Navbar";
import "./header.scss";
import HeaderLogo from 'shared/assets/AdobeStock_107797389-2560x1200.jpg';
import HeaderLogoDark from 'shared/assets/dark.jpg';
import Infouser from "shared/ui/infoUser/InfoUser";
export function Header () {
    return(
        <header className="header" style={{backgroundImage:`url(${HeaderLogo})`}}>
            <div className="container">
                <Navbar/>
                <Infouser/>
            </div>
        </header>
    )
}