import React from "react";
import Skill from "shared/ui/skill/Skill";
import './skills.scss'
import ProfSkill from "shared/ui/profSkill/ProfSkill";
import { useTranslation } from "react-i18next";
export default function Skills () {
    const {t} = useTranslation();
    return(
        <section className="section-skills" id="skills">
            <div className="container">
                <div className="skills-wrap">
                    <div className="skills__tech skills__wrap">
                        <h2 className="skills__header what__header">{t('Технические навыки')}</h2>
                        <Skill value={86} head="Javascript"/>
                        <Skill value={59} head="Typescript"/>
                        <Skill value={50} head="React"/>
                        <Skill value={10} head="PHP"/>
                    </div>
                    <div className="skills__prof">
                        <h2 className="skills__header what__header">{t('Профессиональные навыки')}</h2>
                        <div className="skills__prof--wrap">
                            <ProfSkill header={t('Коммуникация')} value={98}/>
                            <ProfSkill header={t('Работа в комманде')} value={82}/>
                            <ProfSkill header={t('Креатив')} value={69}/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}