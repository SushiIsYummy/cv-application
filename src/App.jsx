import { useState } from 'react';
import CVEditor from './components/CVEditor'
import Resume from './components/Resume';
import './styles/global.css'
import exampleData from './exampleData';
import EducationInfo from './components/EducationInfo';

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  const [educations, setEducations] = useState([]);
  const [currentEducationTargetId, setCurrentEducationTargetId] = useState('');
  const [educationDetails, setEducationDetails] = useState({
    school: '',
    address: '',
    degree: '',
    startDate: '',
    endDate: '',
  });

  function loadEducationDetails(data) {
    setEducationDetails(data);
  }

  function handleEducationDetailsChange(e) {
    const { name, value } = e.target;
    // console.log(e.target);
    setEducationDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    let educationItem = getEducation(currentEducationTargetId);
    updateEducation(currentEducationTargetId, { ...educationItem, [name]: value });
  }

  function getEducation(educationItemId) {
    let education = educations.find((item) => item.id === educationItemId);
    return education;
  }

  function addEducation(educationData) {
    setEducations((prevData) => [...prevData, educationData]);
  }
  
  function updateEducation(educationItemId, educationData) {
    setEducations((prevItemList) =>
      prevItemList.map((item) =>
        item.id === educationItemId ? { ...item, ...educationData } : item
      )
    );
  }
  function removeEducation(id) {
    setEducations((prevData) => prevData.filter((data) => data.id !== id));
  }

  function handlePersonalDetailsChange(e) {
    const { name, value } = e.target;
    console.log(e.target);
    setPersonalDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  return (
    <div className='app'>
      <CVEditor
        personalDetailsValues={personalDetails}
        onPersonalDetailsChange={handlePersonalDetailsChange}
        educationDetails={educationDetails}
        onEducationDetailsChange={handleEducationDetailsChange}
        addEducation={addEducation}
        getEducation={getEducation}
        updateEducation={updateEducation}
        removeEducation={removeEducation}
        loadEducationDetails={loadEducationDetails}
        setCurrentEducationTargetId={setCurrentEducationTargetId}
        currentEducationTargetId={currentEducationTargetId}
      />
      <Resume 
        personalDetailsValues={personalDetails}
        onEducationDetailsChange={handleEducationDetailsChange}
        educationDetails={educationDetails}
        educations={educations}
      />
    </div>
  )
}

export default App;
