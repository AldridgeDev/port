import React from 'react'
import './projects.css';



import Projectitem from './project-item';



class Projects extends React.Component {


  state = {
    sections: [
      {
        info: 'Collaborated in the Design for the Chick-fil-A Lawton, OK website',
        linkUrl: 'https://lawtoncfa.com/',
      title: '  Chick-fil-a of Lawton, OK',
   
          id: 1,
        },
    {
      info: 'A search tool for designers to browse and quickly select a ticket type. Selecting a ticket copies the data to the clipboard. Technologies used: HTML, CSS, Javascript',
      linkUrl: 'https://antonioaldridge.townsquareinteractive.com/ticket-rating-extension',
    title: '  Townsquare Designer Ticket Chrome Extension',

    id: 2,
  },
    {
      info: 'A scraper to identify images on websites that need to be optimized. Technologies used: Javascript/Node.js, HTML, CSS',
      linkUrl: 'https://drive.google.com/file/d/10YipnivPb6DyffXXMa0geJ4lSR0hC2Ta/view?usp=sharing',
    title: '  Node.js Website Scraper',
     
      id: 3,     
    },
    {
      info: 'Designed flyer templates for various marketing campaigns. These flyer templates are still used today at Townsquare. Technologies used: Adobe Suite, Photoshop',
      linkUrl: 'https://antonioaldridge.townsquareinteractive.com/flyer-designs',
    title: '  Designed Promotional Flyer Templates ',
    
      id: 4,
    }
    , {
        info: 'Each template consists of 5 designs for various screen sizes. Technologies used: Adobe Suite, Photoshop',
        linkUrl: 'https://antonioaldridge.townsquareinteractive.com/ad-designs',
        title: 'Designed Website and Social Media Ad Templates',
        id: 5,
      },
      {
        info: 'Legal Website Template',
        linkUrl: 'https://luna_legal03.townsquareinteractive.com/',
        title: 'Designed Website Template for Law Firms',
        id: 6,
      } ,
      {
        info: 'Restaurant Website Template',
        linkUrl: 'https://restaurant07.production.townsquareinteractive.com/',
        title: 'Designed Website Template for Restaurants/Coffee Shops',
        id: 7,
      },
       {
        info: 'Home Remodeling Website Template',
        linkUrl: 'https://kitchencentraldemo.production.townsquareinteractive.com/',
        title: 'Designed Website Template for Home Remodeling Companies',
        id: 8,
      } ,
      {
       info: 'HVAC Website Template',
       linkUrl: 'https://luna_syventure_template.production.townsquareinteractive.com/',
       title: 'Designed Website Template for HVAC Companies',
       id: 9,
     } 
    ]

  }



  render() {
    return (
      <div className='projects-page' id='projects' >

        <h1 className='te'>  <span role="img" aria-label="cd"  > 💿 Projects 🚀</span>  </h1>

        <hr />


        <div className='directory-project'>


          {

            this.state.sections.map(({ title, linkUrl, info, id }) => (
              <Projectitem key={id} title={title} linkUrl={linkUrl} info={info} />
            ))
          }

        </div>

        <div className='gitwork' >
          <hr />
          <span className='work'  >Like my work ? OR want to see more work..!? well You can see all on  my Github. </span>

          <button
            className=' buttun  grow  pointer bg-black tc br2 Center white'

            onClick={(e) => {
              e.preventDefault();
              window.open('https://github.com/MugheesMb');
            }}
          > <i className="cib-github"></i>
            {' '}Github</button>
          <hr />

        </div>

      </div>

    )
  }
}
export default Projects;
