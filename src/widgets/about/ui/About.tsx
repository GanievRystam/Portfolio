import React from "react";
import AboutImg from 'shared/assets/about.png';
import './about.scss'
import { useTranslation } from "react-i18next";
export default function About () {
    const {t} = useTranslation();
    return(
        <section className="about" id="about">
            <div className="container">
                <div className="about-wrapper">
                    <img className="about__img" src={AboutImg} alt="about" />
                    <div className="about-me">
                        <h2 className="about-me__header">{t('Обо мне')}</h2>
                        <p className="about-me__text">Hello, I’m a Patrick, web-developer based on Paris. I have rich experience in
    web site design & building and customization. Also I am good at</p>
                        <div className="skills">
                            <span className="skills__skill">Html</span>
                            <span className="skills__skill">Css</span>
                            <span className="skills__skill">React</span>
                            <span className="skills__skill">Javascript</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}