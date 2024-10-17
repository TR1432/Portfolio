import React from "react";
import SkillCard from "./skill";
import './Home.css'

const HomePage  = (props) => {
    const skillList = props.skillList;
    const aspiring = props.aspiring;
    const contactInfoList = props.contactInfoList;
    return (
        <main className="row homepage">
            <div className="col-6 intro">
                <div>
                    Hi,
                </div>
                <div>
                    I'm <span>Pelumi</span>... a
                </div>
            </div> 
            <div className="col-6 code">
                <div className="open">&lt;p&gt;</div>
                <div className="content">Nigerian kid engraving his name on the internet</div>
                <div className="close">&lt;/p&gt;</div>
            </div>
            <div className="col-12 overflow-y-hidden overflow-x-auto d-flex flex-row ">
                {skillList.map((skill, index) => (
                    <SkillCard key={index} name={skill.name} tools={skill.tools} />
                ))}
            </div>
            <div className="col-12 aspire">Aspiring...</div>
            <div className="col-12 row aspirelist">
                <div>{aspiring}</div>
            </div>
            <div className="col-12 contacts">
                {contactInfoList.map((contact, index) => (
                    <a key={index} href={contact.link} title={contact.title} className='contact-circle ' >
                        <i className={`${contact.icon} contacticon`} />
                    </a>
                ))}
            </div>
        </main>
    )
};

export default HomePage;