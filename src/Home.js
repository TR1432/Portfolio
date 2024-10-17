import React from "react";


const HomePage  = ({ skillList = [], aspiringList = [], contactInfoList = [] }) => {
    const skillList = props.skillList;
    const aspiringList = props.aspiringList;
    const contactInfoList = props.contactInfoList;
    return (
        <main>
            <div>
                <div>
                    Hi,
                </div>
                <div>
                    I'm <span>Pelumi</span>... a
                </div>
            </div> 
            <div>
                <div>&lt;p&gt;</div>
                <div>Nigerian kid engraving his name on the internet</div>
                <div>&lt;/p&gt;</div>
            </div>
            {skillList.map((skill) => {
                <SkillCard name={skill.name} tools={skill.tools} />
            })}
            {aspiringList && aspiringList.length > 0 && (
                <div>Aspiring</div>
            )}
            {aspiringList.map((skill, index) => (
                <div key={index}>{skill}</div>
            ))}

            <div>
                {contactInfoList.map((contact) => {
                    <a href={contact.link} className={''+contact.icon}><i className={contact.font} /></a>
                })}
            </div>
        </main>
    )
};

export default HomePage;