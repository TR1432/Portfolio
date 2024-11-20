import React from 'react'
import InfoCard from './Infocard'
import './about.css'

const AboutPage = () => {
    const Info = [{
        title: 'Bio Data',
        list: [
            {name: 'FullName', value: 'Fadahunsi Oluwapelumi Ayomikun'},
            {name: 'Birthday', value: '30th March 2006'},
            {name: 'Age', value:'18 Years Old'},
            {name: 'Origin', value: 'Osun State, Nigeria'}
        ]
    }, {
        title: 'Music',
        list: [
            {name: 'Genre', value: 'Rap | Hip pop'},
            {name: 'Fav. Artist', value: 'Kendrick | Eminem | J.cole'},
            {name: 'Spotify Name', value:'Ayomikun3006'},
            {name: 'Dislikes', value: "I don't discriminate"}
        ]
    }, {
        title: 'Books',
        list: [
            {name: 'Fav. Books', value: 'No Excuses | 48 Laws of Power'},
            {name: 'Fav. Writers', value: 'Robert Greene | Brian Tracy'},
            {name: 'Genre', value: "Self-help | Philosophy"},
            {name: 'Honourable Mentions', value:'Atomic Habits | Psychology of Stupidity'}
        ]
    }]
    return (
        <main>
            <div className='cardwrapper'>
              {Info.map((info) => (
                  <InfoCard info={info} />
             ))} 
           </div>
        </main>
    )
}

export default AboutPage