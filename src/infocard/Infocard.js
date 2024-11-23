import React from 'react'
import { motion } from 'framer-motion'

const InfoCard = (props) => {
    return (
            <motion.div className='infocard'
            initial={{  }}
            >
                <div className='card-title'>
                    {props.info.title}
                </div>
                <div className='card-content'>
                    {props.info.list.map((info) => (
                        <div className='row'>
                            <div className='col-4'>{info.name}:</div>
                            <span className='col-8'>{info.value}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
    )
}

export default InfoCard