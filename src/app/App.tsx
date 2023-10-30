import React from "react";
import { Header } from "widgets/sidebar/header/ui/Header";
import './app.scss'
import { About } from "widgets/about";
import { WhatIDo } from "widgets/whatIDo";
const App = () => {
    return (
        <>
            <Header/>
            <About/>
            <WhatIDo/>
        </>
    );
}

export default App;