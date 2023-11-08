import React, { useState } from "react";
import './portfolio.scss'
import { useTranslation } from "react-i18next";

export default function Portfolio () {
    const {t} = useTranslation();
    const [category, setCategory] = useState('all');
    const allWorks:any = {all:[{src:'assets/g8.png.png', href:'https://google.com'}, {src:'assets/g8.png.png', href:'https://google.com'}, {src:'assets/g2.png.png', href:'https://google.com'},{src:'assets/g1.jpg.png', href:'https://google.com'}], web:[{src:'assets/g1.jpg.png', href:'https://google.com'}],react:[{src:'assets/g8.png.png', href:'https://google.com'}],js:[{src:'assets/g2.png.png', href:'https://google.com'}]};
    function switchCategory (e:any) {
        document.querySelector('.nav__item--active').classList.remove('nav__item--active');
        const category = e.target.getAttribute('data-role');
        e.target.classList.add('nav__item--active');
        setCategory(category);
    }
    return(
        <section id="portfolio">
            <div className="container">
                <h2 className="what__header">{t('Последние работы')}</h2>
                <nav className="nav">
                    <ul className="nav__items">
                        <li className="nav__item nav__item--active" data-role="all" onClick={(e) => switchCategory(e)}>
                            All categories
                        </li>
                        <li className="nav__item" data-role="web" onClick={(e) => switchCategory(e)}>
                            Web Design
                        </li>
                        <li className="nav__item" data-role="react" onClick={(e) => switchCategory(e)}>
                            React
                        </li>
                        <li className="nav__item" data-role="js" onClick={(e) => switchCategory(e)}>
                            JS
                        </li>
                    </ul>
                </nav>
                <div className="portfolio">
                    <div className="portfolio__work">
                    {allWorks[category].map( (work:any, index: number)=> {
                            return <a key={index} href={work.href}> <img className="portfolio__img" src={work.src} alt="" /></a>
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}