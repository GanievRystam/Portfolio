import React from "react";
interface IdoProps {
    header: string
    text: string
    svg: string
}
export default function Ido(props:IdoProps) {
    const {header, text, svg} = props;
    return(
        <div className="what__item">
            <img className="what__img" src={svg} alt="" />
            <h3 className="what__head">{header}</h3>
            <p className="what__text">{text}
            </p>
        </div>
    )
}