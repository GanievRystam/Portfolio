import React from "react";
import './whatIDo.scss'
import Ido from "shared/ui/ido/Ido";
import Img from 'shared/assets/Vector (2).svg'
import Img2 from 'shared/assets/Vector (3).svg'
import Img3 from 'shared/assets/Vector (4).svg'
import { useTranslation } from "react-i18next";
export default function WhatIDo () {
    const {t} = useTranslation();
    return(
        <section className="what">
            <div className="container">
                <h2 className="what__header">{t('Что я делаю')}</h2>
                <div className="what__items">
                <Ido header="UI Design" text="Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat
                            volutpat." svg={Img} />
                <Ido header="Web Development" text="Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat
                            volutpat." svg={Img2} />
                <Ido header="App Development" text="Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat
                            volutpat." svg={Img3} />
                </div>
            </div>
        </section>
    )
}