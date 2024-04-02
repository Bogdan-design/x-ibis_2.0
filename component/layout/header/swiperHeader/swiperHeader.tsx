import React from 'react';
import {links} from "@/lid/data";
import {Swiper, SwiperSlide} from "swiper/react";
import Link from "next/link";
import {monumentExtended} from "@/fonts/fonts";
import {Menu} from "@/component/menu/menu";
import s from './swiperHeader.module.scss'

const SwiperHeader = ({t,slice}:{t:(text:string)=>string,slice:number}) => {
    return (
        <div style={{
            width: '100%'
        }}>
            <div style={{
                display: 'flex',
                position: 'relative',
                height: '40px'
            }}>
                <Swiper className={s.swiper}
                        spaceBetween={20}
                        slidesPerView={2.3}

                >
                    <div className={s.options}>
                        <nav>
                            <div className={s.links}>
                                {links.slice(slice).map((l) => (
                                    <SwiperSlide style={{
                                        border: "1px solid #E75934",
                                        borderRadius: "200px",
                                        padding: '6px 10px',
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }} key={l.hash}>
                                        <Link style={monumentExtended.style} className={s.link}
                                              href={`/${l.hash}`}>{t(l.name)}</Link>
                                    </SwiperSlide>
                                ))}
                            </div>
                        </nav>
                        <SwiperSlide style={{top: "6px"}}>
                            <div style={{display: "flex"}}>
                                <Menu/>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default SwiperHeader;