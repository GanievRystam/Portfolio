import React from "react";
import imgPort from 'shared/assets/g1.jpg.png';
import imgPort2 from 'shared/assets/g2.png.png';
import imgPort3 from 'shared/assets/g8.png.png';

import './portfolio.scss'
export default function Portfolio () {
    return(
        <section >
            <div className="container">
                <h2 className="what__header">Recent Portfolio</h2>
                <nav className="nav">
                    <ul className="nav__items">
                        <li className="nav__item nav__item--active">
                            All Categories
                        </li>
                        <li className="nav__item">
                            Web Design
                        </li>
                        <li className="nav__item">
                            React
                        </li>
                        <li className="nav__item">
                            JS
                        </li>
                    </ul>
                </nav>
                <div className="portfolio">
                    <div className="portfolio__work">
                        <img className="portfolio__img" src={imgPort} alt="" />
                        <img className="portfolio__img" src={imgPort2} alt="" />
                        <img className="portfolio__img" src={imgPort3} alt="" />
                    </div>
                    <div className="portfolio__work">
                        <img className="portfolio__img" src={imgPort2} alt="" />
                        <img className="portfolio__img" src={imgPort} alt="" />
                        <img className="portfolio__img" src={imgPort} alt="" />
                    </div>
                    <div className="portfolio__work">
                        <img className="portfolio__img" src={imgPort3} alt="" />
                        <img className="portfolio__img" src={imgPort} alt="" />
                        <img className="portfolio__img" src={imgPort2} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}