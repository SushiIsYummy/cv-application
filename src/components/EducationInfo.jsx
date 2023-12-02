import '../styles/EducationInfo.css'

function EducationInfo({
  educationDetails,
}) {
  return (
    <>
      <div className="education-info">
        <div className="school-address">
          <p className='school'>{educationDetails.school}</p>
          <p className='address'>{educationDetails.address}</p>
        </div>
        <div className="degree-date-of-study">
          <p className='degree'>{educationDetails.degree}</p>
          <div className="date-of-study">
            <p className='startDate'>{educationDetails.startDate}</p>
            {educationDetails.startDate &&
            educationDetails.endDate &&
            <span>-</span>}
            <p className='endDate'>{educationDetails.endDate}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default EducationInfo;