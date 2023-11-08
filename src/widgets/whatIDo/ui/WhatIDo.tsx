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
                <Ido header={t('Разработка приложений')} text={t('Разработка-пре')} svg={Img} />
                <Ido header={t('Вёрстка')} text={t('Вёрстка-пре')} svg={Img2} />
                <Ido header={t('Тестирование')} text={t('Тестирование-пре')} svg={Img3} />
                </div>
            </div>
        </section>
    )
}