import React from "react";
import { Header } from "widgets/sidebar/header/ui/Header";
import './app.scss'
import { About } from "widgets/about";
import { WhatIDo } from "widgets/whatIDo";
import { Featured } from "widgets/featured";
import { Skills } from "widgets/skills";
import Experience from "widgets/experience/ui/Experience";
const App = () => {
    return (
        <>
            <Header/>
            <About/>
            <WhatIDo/>
            <Featured/>
            <Skills/>
            <Experience/>
        </>
    );
}

export default App;