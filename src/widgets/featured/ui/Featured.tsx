import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './featured.scss'
import SwipImg from 'shared/assets/port-one.png'
import SwipImgTwo from 'shared/assets/port-two.png'
import SwipImgTree from 'shared/assets/port-tree.png'
import { Navigation } from 'swiper/modules';
import { useTranslation } from "react-i18next";
export default function Featured () {
    const {t} = useTranslation();
    return(
        <section className="featured" >
            <div className="container">
                <h2 className="what__header featured__header">{t('Избранные проекты')}</h2>
                <Swiper
                      modules={[Navigation]}
                      spaceBetween={50}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true }}
                      scrollbar={{ draggable: true }}
                      onSwiper={(swiper) => console.log(swiper)}                   >
                    <SwiperSlide>
                        <img className="swiper__img" src={SwipImg} alt="" />
                        <div className="swiper__description">
                            <h3 className="swiper__header-green">{t('Фронтенд разработчик')}</h3>
                            <h2 className="swiper__header">Artificium</h2>
                            <h4 className="swiper__mini-header">{t('Разработка')}</h4>
                            <p className="swiper__text">Stamp is a clean and elegant Multipurpose Landing Page Template. It
                                will fit perfectly for Startup, Web App or any type of Web Services. It
                                has 4 background styles with 6 homepage styles. 6 pre-defined color
                                scheme. All variations are organized separately so you can use /
                                customize the template very easily.
                            </p>
                            <a href="https://ganievrystam.github.io/artificium" className="swiper__link">{t('Посмотреть детали')}</a>

                            
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img className="swiper__img" src={SwipImgTwo} alt="" />
                        <div className="swiper__description">
                            <h3 className="swiper__header-green">{t('Фронтенд разработчик')}</h3>
                            <h2 className="swiper__header">Строитель</h2>
                            <h4 className="swiper__mini-header">{t('Разработка')}</h4>
                            <p className="swiper__text">Stamp is a clean and elegant Multipurpose Landing Page Template. It
                                will fit perfectly for Startup, Web App or any type of Web Services. It
                                has 4 background styles with 6 homepage styles. 6 pre-defined color
                                scheme. All variations are organized separately so you can use /
                                customize the template very easily.
                            </p>
                            <a href="https://ganievrystam.github.io/labsales/" className="swiper__link">{t('Посмотреть детали')}</a>

                            
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img className="swiper__img" src={SwipImgTree} alt="" />
                        <div className="swiper__description">
                            <h3 className="swiper__header-green">{t('Фронтенд разработчик')}</h3>
                            <h2 className="swiper__header">NFC</h2>
                            <h4 className="swiper__mini-header">{t('Разработка')}</h4>
                            <p className="swiper__text">Stamp is a clean and elegant Multipurpose Landing Page Template. It
                                will fit perfectly for Startup, Web App or any type of Web Services. It
                                has 4 background styles with 6 homepage styles. 6 pre-defined color
                                scheme. All variations are organized separately so you can use /
                                customize the template very easily.
                            </p>
                            <a href="https://ganievrystam.github.io/NFT_React/" className="swiper__link">{t('Посмотреть детали')}</a>

                            
                        </div>
                    </SwiperSlide>
                    </Swiper>
            </div>
        </section>
    )
}