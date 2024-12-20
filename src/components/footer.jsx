import React from 'react'
import './footer.css';
import { ReactComponent as Piclog } from './images/fot.svg';

const Footer = () => {
    return (
        <div className='foter' id='footer' >



            <div className='touch' >
                <h2 className='touchtext' >Contact Me</h2>
                <p style={{ width: '100%' }} >Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                <p  >Need help?</p>
                <span className="far fa-envelope"  >{'   '}antonio.b.aldridge@gmail.com</span>
                <p className='mt2'  > Want to Hire me?</p>
                <span className="fab fa-linkedin"     >{'         '}https://www.linkedin.com/in/antonioaldridge/</span>

            </div>

            < Piclog className='picl' />

        </div>
    )
}

export default Footer;
