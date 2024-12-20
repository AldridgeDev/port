import React from 'react'
import './about.css';
import {ReactComponent as Abot} from './images/abot.svg';
const About = () => {
    return (
        <div className='aboutt' id='about' >
        <div>
                 <Abot className='aboutsvg' />
            
           
        </div>
        <div className='me br4' >
             <div className='text' >I'm Antonio, a Senior UI/UX Designer & Front-End Developer with a passion for front-end development and crafting beautiful websites. I create web experiences that leave a lasting impression. Clients like Chick-fil-A and Ashley Furniture have trusted me to bring their visions to life with style, functionality, and a dash of creativity. 
        </div>

        </div>
        

        </div>
    )
}

export default About;


