import { useState, Fragment } from 'react';
import '../styles/Resume.css';
import EducationInfo from './EducationInfo';
import ExperienceInfo from './ExperienceInfo';

function Resume({ 
  personalDetailsValues,
  educationDetails,
  onEducationDetailsChange,
  educations,

  onExperienceDetailsChange,
  experiences,
}) {
  const { firstName, lastName, email, phoneNumber, github, linkedin } = personalDetailsValues;
  let contactInfo = [email, phoneNumber, github, linkedin];
  contactInfo = contactInfo.filter((info) => info !== '');
  return (
    <section className="resume">
      <header>
        {(firstName || lastName) &&
          <h1 className='name'>{firstName} {lastName}</h1>
        }
        {(email || phoneNumber) &&
          <div className="contact">
            {contactInfo.map((info, i) => 
              <Fragment key={i}>
                {i > 0 && <span>|</span>}
                <p>{info}</p>
              </Fragment>
            )}
          </div>
        }
      </header>
      <main>
        {educations.length > 0 &&
          <section className='education-section'>
            <h1 className='title'>E<span>DUCATION</span></h1>
            {educations.map((item) => {
              return (
              <EducationInfo
                key={item.id} 
                educationDetails={item}
                onEducationDetailsChange={onEducationDetailsChange}
              />)
            })}
          </section>
        }
        {experiences.length > 0 &&
          <section className='experience-section'>
            <h1 className='title'>E<span>XPERIENCE</span></h1>
            {experiences.map((item) => {
              return (
              <ExperienceInfo
                key={item.id} 
                experienceDetails={item}
                onExperienceDetailsChange={onExperienceDetailsChange}
              />)
            })}
          </section>
        }
        
      </main>
    </section>
  );
}

export default Resume;