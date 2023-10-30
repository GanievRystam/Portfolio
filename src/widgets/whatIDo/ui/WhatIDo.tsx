import React from "react";
import './whatIDo.scss'
import Img from 'shared/assets/c2f211abb729ee9336bd706c075c32a3.png'
export default function WhatIDo () {
    return(
        <section className="what">
            <div className="container">
                <h2 className="what__header">What I do</h2>
                <div className="what__items">
                    <div className="what__item">
                        <img className="what__img" src={Img} alt="" />
                        <h3 className="what__head">UI Design</h3>
                        <p className="what__text">Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat
                            volutpat.
                        </p>
                    </div>
                    <div className="what__item">
                        <img className="what__img" src={Img} alt="" />
                        <h3 className="what__head">UI Design</h3>
                        <p className="what__text">Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat
                            volutpat.
                        </p>
                    </div>
                    <div className="what__item">
                        <img className="what__img" src={Img} alt="" />
                        <h3 className="what__head">UI Design</h3>
                        <p className="what__text">Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat
                            volutpat.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}