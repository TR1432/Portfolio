import React from 'react'

const InfoCard = (props) => {
    return (
            <div className='infocard'>
                <div className='card-title'>
                    {props.info.title}
                </div>
                <div className='card-content'>
                    {props.info.list.map((info) => (
                        <div className='row'><div className='col-4'>{info.name}:</div> <span className='col-8'>{info.value}</span></div>
                    ))}
                </div>
            </div>
    )
}

export default InfoCard