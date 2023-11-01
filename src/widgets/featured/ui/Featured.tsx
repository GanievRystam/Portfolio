import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './featured.scss'
import SwipImg from 'shared/assets/c2f211abb729ee9336bd706c075c32a3.png'
import HeaderLogo from 'shared/assets/AdobeStock_107797389-2560x1200.jpg'
import { Navigation } from 'swiper/modules';
export default function Featured () {
    return(
        <section className="featured" style={{backgroundImage:`url(${HeaderLogo})`}}>
            <div className="container">
                <h2 className="what__header featured__header">Featured Projects</h2>
                <Swiper
                      modules={[Navigation]}
                      spaceBetween={50}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true }}
                      scrollbar={{ draggable: true }}
                      onSwiper={(swiper) => console.log(swiper)}
                      onSlideChange={() => console.log('slide change')}
                   >
                    <SwiperSlide>
                        <img className="swiper__img" src={SwipImg} alt="" />
                        <div className="swiper__description">
                            <h3 className="swiper__header-green">Web Design</h3>
                            <h2 className="swiper__header">Wrap</h2>
                            <h4 className="swiper__mini-header">Design & Development</h4>
                            <p className="swiper__text">Stamp is a clean and elegant Multipurpose Landing Page Template. It
                                will fit perfectly for Startup, Web App or any type of Web Services. It
                                has 4 background styles with 6 homepage styles. 6 pre-defined color
                                scheme. All variations are organized separately so you can use /
                                customize the template very easily.
                            </p>
                            <a className="swiper__link">View Details</a>

                            <p className="swiper__text swiper__text--italic">Excellent Template - suits my needs perfectly whilst allowing me to learn some new technology first hand.</p>
                            <p className="swiper__text swiper__text--bold">- Shane Kavanagh</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img className="swiper__img" src={SwipImg} alt="" />
                        <div className="swiper__description">
                            <h3 className="swiper__header-green">Web Design</h3>
                            <h2 className="swiper__header">Wrap</h2>
                            <h4 className="swiper__mini-header">Design & Development</h4>
                            <p className="swiper__text">Stamp is a clean and elegant Multipurpose Landing Page Template. It
                                will fit perfectly for Startup, Web App or any type of Web Services. It
                                has 4 background styles with 6 homepage styles. 6 pre-defined color
                                scheme. All variations are organized separately so you can use /
                                customize the template very easily.
                            </p>
                            <a className="swiper__link">View Details</a>

                            <p className="swiper__text swiper__text--italic">Excellent Template - suits my needs perfectly whilst allowing me to learn some new technology first hand.</p>
                            <p className="swiper__text swiper__text--bold">- Shane Kavanagh</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img className="swiper__img" src={SwipImg} alt="" />
                        <div className="swiper__description">
                            <h3 className="swiper__header-green">Web Design</h3>
                            <h2 className="swiper__header">Wrap</h2>
                            <h4 className="swiper__mini-header">Design & Development</h4>
                            <p className="swiper__text">Stamp is a clean and elegant Multipurpose Landing Page Template. It
                                will fit perfectly for Startup, Web App or any type of Web Services. It
                                has 4 background styles with 6 homepage styles. 6 pre-defined color
                                scheme. All variations are organized separately so you can use /
                                customize the template very easily.
                            </p>
                            <a className="swiper__link">View Details</a>

                            <p className="swiper__text swiper__text--italic">Excellent Template - suits my needs perfectly whilst allowing me to learn some new technology first hand.</p>
                            <p className="swiper__text swiper__text--bold">- Shane Kavanagh</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img className="swiper__img" src={SwipImg} alt="" />
                        <div className="swiper__description">
                            <h3 className="swiper__header-green">Web Design</h3>
                            <h2 className="swiper__header">Wrap</h2>
                            <h4 className="swiper__mini-header">Design & Development</h4>
                            <p className="swiper__text">Stamp is a clean and elegant Multipurpose Landing Page Template. It
                                will fit perfectly for Startup, Web App or any type of Web Services. It
                                has 4 background styles with 6 homepage styles. 6 pre-defined color
                                scheme. All variations are organized separately so you can use /
                                customize the template very easily.
                            </p>
                            <a className="swiper__link">View Details</a>

                            <p className="swiper__text swiper__text--italic">Excellent Template - suits my needs perfectly whilst allowing me to learn some new technology first hand.</p>
                            <p className="swiper__text swiper__text--bold">- Shane Kavanagh</p>
                        </div>
                    </SwiperSlide>
                    </Swiper>
            </div>
        </section>
    )
}