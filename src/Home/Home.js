import React from "react";
import SkillCard from "../skillcard/skill";
import './Home.css'
import { motion } from "framer-motion";

const HomePage  = (props) => {
    const skillList = props.skillList;
    const aspiring = props.aspiring;
    const contactInfoList = props.contactInfoList;
    return (
        <main className="row homepage">
            <div className="col-6 intro">
                    <div style={{
                        display: "flex",
                    }}>
                        <motion.div
                        style={{overflow: "hidden"}}
                        initial={{width: 0}}
                        animate={{width: 50}}
                        transition={{delay: .8, duration: .3}}
                        >
                         Hi,
                     </motion.div>
                     <div className="cursor"/>
                </div>
                <div>
                    <div style={{
                        display: "flex",
                    }}>
                        <motion.div
                        style={{overflow: "hidden", display: "flex", textWrap: "nowrap"}}
                        initial={{width: 0}}
                        animate={{width: 330}}
                        transition={{delay: 1.1, duration: 1}}
                        >
                            I'm <span style={{marginLeft: "7px"}}> Pelumi</span>... a
                        </motion.div>
                        <div className="cursor"/>
                    </div>
                </div>
            </div> 
            <div className="col-6 code">
                <div className="open"
                    style={{ display: "flex" }}
                >
                    <motion.div
                        style={{overflow: "hidden", display: "flex", textWrap: "nowrap"}}
                        initial={{width: 0}}
                        animate={{width: 30}}
                        transition={{delay: 2.0, duration: .2}}
                    >
                        &lt;p&gt;
                    </motion.div>
                    <div className="cursor-code"/>
                </div>
                <div className="content"
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    <motion.div
                        style={{overflow: "hidden", display: "flex", textWrap: "nowrap"}}
                        initial={{width: 0}}
                        animate={{width: 440}}
                        transition={{delay: 2.2, duration: .6}}
                    >
                        Nigerian kid engraving his name on the internet
                    </motion.div>
                    <div className="cursor-code"/>
                </div>
                <div className="close"
                    style={{ display: "flex", justifyContent: "end" }}
                >
                    <motion.div
                        style={{overflow: "hidden", display: "flex", textWrap: "nowrap"}}
                        initial={{width: 0}}
                        animate={{width: 40}}
                        transition={{delay: 2.8, duration: .2}}
                    >
                        &lt;/p&gt;
                    </motion.div>
                    <div className="cursor-code"/>
                </div>
            </div>
            <div className="col-12 overflow-x-auto cardwrapper">
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
                    <motion.a key={index} href={contact.link} title={contact.title} className='contact-circle ' 
                        initial={{ x: -390}}
                        animate={{x: 0, rotate: 720}}
                        transition={{ delay: 1 + (index * 0.4), duration: 1}}
                    >
                        <i className={`${contact.icon} contacticon`} />
                    </motion.a>
                ))}
            </div>
        </main>
    )
};

export default HomePage;