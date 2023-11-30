import { useState } from 'react';
import '../styles/Resume.css';
import EducationInfo from './EducationInfo';

function Resume({ 
  personalDetailsValues,
  educationDetails,
  onEducationDetailsChange,
  educations,
}) {
  const { firstName, lastName, email, phoneNumber } = personalDetailsValues;
  return (
    <section className="resume">
      <header>
        {(firstName || lastName) &&
          <h1 className='name'>{firstName} {lastName}</h1>
        }
        {(email || phoneNumber) &&
          <div className="contact">
            <p className='email'>{email}</p>
            {email && phoneNumber && <span>|</span>}
            <p className='phone-number'>{phoneNumber}</p>
          </div>
        }
      </header>
      <main>
        {educations.length > 0 &&
          <section className='education-section'>
            <h1 className='title'>E<span>DUCATION</span></h1>
            {educations.map((item) => {
              console.log(item);
              return (
              <EducationInfo
                key={item.id} 
                educationDetails={item}
                onEducationDetailsChange={onEducationDetailsChange}
                // currentTarget={true}
              />)
            })}
          </section>
        }
        {/* {experienceItems.length > 0 &&
          <section className="experience-info">
            <h1 className='title'>Experience</h1>
            {experienceItems.map((item) => {
              return item;
            })}
          </section>
        } */}
        
      </main>
    </section>
  );
}

export default Resume;