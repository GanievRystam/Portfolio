import React from "react";
import './skill.scss'
interface skillProps {
    value: number
    head: string

}
export default function Skill (props: skillProps) {
    const {value, head} = props;
    return(
        <div className="skill">
            <div className="skill__head">
                <h4 className="skill__header">{head}</h4>
                <span className="skill__procents">{value} %</span>
            </div>
            <div className="skill__border">
                <div className="skill__border--fill" style={{width:value +'%'}}></div>
            </div>
        </div>
    )
}