import React from "react";
import './profSkill.scss';

interface ProfSkillProps{
    header: string
    value: number
}

export default function ProfSkill ({header, value}: ProfSkillProps) {
    return(
        <div className="prof">
            <div className="prof-skill">
            <svg >
                    <path fill="none"
                        stroke-linecap="round"
                        stroke-width="5"
                        stroke="rgba(0, 0, 0, 0.5)"
                        stroke-dasharray="251.2,0"
                        d="M80 10 a 60 60 0 0 1 0 120 a 40 40 0 0 1 0 -120"
                    />
                    <path className="prof-skill-border" fill="none"
                        stroke-linecap="round"
                        stroke-width="5"
                        stroke="#0BCEAF"
                        stroke-dasharray="35"
                        d="M80 10 a 60 60 0 0 1 0 120 a 40 40 0 0 1 0 -120"
                    >
                    </path>
                    
                    <text className="prof-skill__count" x="85" y="70" text-anchor="middle" dy="7" font-size="20" font-family="arial">
                        {value} %
                    </text>
                </svg>
            </div>
            <h5 className="prof-header">{header}</h5>
        </div>
    )
}