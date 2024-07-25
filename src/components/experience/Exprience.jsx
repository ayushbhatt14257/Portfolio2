import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Exprience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
           <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className= 'experience_details'>
              <BsFillPatchCheckFill className = 'experience_detail-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className= 'experience_details'>
              <BsFillPatchCheckFill className = 'experience_detail-icon'/>
              <div>
              <h4>Css</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className= 'experience_details'>
              <BsFillPatchCheckFill className = 'experience_detail-icon'/>
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className= 'experience_details'>
              <BsFillPatchCheckFill className = 'experience_detail-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className= 'experience_details'>
              <BsFillPatchCheckFill className = 'experience_detail-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className= 'experience_details'>
              <BsFillPatchCheckFill className = 'experience_detail-icon'/>
              <div>
              <h4>WordPress</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="experience_content">
            <article className= 'experience_details'>
              <BsFillPatchCheckFill className = 'experience_detail-icon'/>
              <div>
              <h4>Node.js</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className= 'experience_details'>
              <BsFillPatchCheckFill className = 'experience_detail-icon'/>
              <div>
              <h4>Express.js</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className= 'experience_details'>
              <BsFillPatchCheckFill className = 'experience_detail-icon'/>
              <div>
              <h4>MongoDb</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className= 'experience_details'>
              <BsFillPatchCheckFill className = 'experience_detail-icon'/>
              <div>
              <h4>Mongoose</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>  
          </div>
        </div>
      </div>

    </section>
  )
}

export default Exprience