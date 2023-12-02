import '../styles/ExperienceInfo.css';
import EditCardDropdown from './EditCardDropdown';

function ExperienceInfo({
  experienceDetails,
}) {
  let achievementsList = experienceDetails.achievements === '' ? '' : experienceDetails.achievements.split('\n');
  return (
    <>
      <div className='experience-info'>
        <div className="position-title-employment-date">
          <p className='position-title'>{experienceDetails.positionTitle}</p>
          <div className='employment-date'>
            <p className='start-date'>{experienceDetails.startDate}</p>
            {experienceDetails.startDate &&
            experienceDetails.endDate &&
            <span> - </span>}
            <p className='end-date'>{experienceDetails.endDate}</p>
          </div>
        </div>
        <div className='company-name-location'>
          <p className='name'>{experienceDetails.companyName}</p>
          <p className='location'>{experienceDetails.companyLocation}</p>
        </div>
        <div className="achievements">
          <ul>
            {achievementsList !== '' && 
            achievementsList.map((achievement, index) => {
              return <li key={index}>{achievement}</li>;
            })}
          </ul> 
        </div>
      </div>
    </>
  );
}

export default ExperienceInfo;