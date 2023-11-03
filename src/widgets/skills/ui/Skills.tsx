import React from "react";
import Skill from "shared/ui/skill/Skill";
import './skills.scss'
import ProfSkill from "shared/ui/profSkill/ProfSkill";
export default function Skills () {
    return(
        <section className="section-skills" id="skills">
            <div className="container">
                <div className="skills-wrap">
                    <div className="skills__tech skills__wrap">
                        <h2 className="skills__header what__header">Technical Skills</h2>
                        <Skill value={86} head="Javascript"/>
                        <Skill value={3} head="Java"/>
                        <Skill value={1} head="Python"/>
                        <Skill value={9} head="PHP"/>
                        <Skill value={50} head="React"/>
                    </div>
                    <div className="skills__prof">
                        <h2 className="skills__header what__header">Professional Skills</h2>
                        <div className="skills__prof--wrap">
                            <ProfSkill header="Communication" value={98}/>
                            <ProfSkill header="Team Work" value={8}/>
                            <ProfSkill header="Creativity" value={68}/>
                            <ProfSkill header="Project Management" value={28}/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}