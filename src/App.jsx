import { useState } from 'react';
import CVEditor from './components/CVEditor'
import Resume from './components/Resume';
import exampleData from './exampleData';
import './styles/global.css';

function App() {
  const [personalDetails, setPersonalDetails] = useState(exampleData.personalDetails);

  const [educations, setEducations] = useState(exampleData.educations);
  const [currentEducationTargetId, setCurrentEducationTargetId] = useState('');
  const [savedEducationItemList, setSavedEducationItemList] = useState(
    exampleData.educations.map((education) => { 
      return (
        {
          ...education,
          title: education.school,
          saved: true,
          temp: false,
        }
      )
    })
  );
  const [educationDetails, setEducationDetails] = useState(exampleData.emptyInputs.education);

  const [experiences, setExperiences] = useState(exampleData.experiences);
  const [currentExperienceTargetId, setCurrentExperienceTargetId] = useState('');
  const [savedExperienceItemList, setSavedExperienceItemList] = useState(
    exampleData.experiences.map((experience) => { 
      return (
        {
          ...experience,
          title: experience.companyName,
          saved: true,
          temp: false,
        }
      )
    })
  );
  const [experienceDetails, setExperienceDetails] = useState(exampleData.emptyInputs.experience);

  const [resumeWasCleared, setResumeWasCleared] = useState(false);

  function handlePersonalDetailsChange(e) {
    const { name, value } = e.target;
    setPersonalDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function loadEducationDetails(data) {
    setEducationDetails(data);
  }

  function handleEducationDetailsChange(e) {
    const { name, value } = e.target;
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
    setPersonalDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function loadExperienceDetails(data) {
    setExperienceDetails(data);
  }

  function handleExperienceDetailsChange(e) {
    const { name, value } = e.target;
    setExperienceDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    let experienceItem = getExperience(currentExperienceTargetId);
    updateExperience(currentExperienceTargetId, { ...experienceItem, [name]: value });
  }

  function getExperience(experienceItemId) {
    let experience = experiences.find((item) => item.id === experienceItemId);
    return experience;
  }

  function addExperience(experienceData) {
    setExperiences((prevData) => [...prevData, experienceData]);
  }
  
  function updateExperience(experienceItemId, experienceData) {
    setExperiences((prevItemList) =>
      prevItemList.map((item) =>
        item.id === experienceItemId ? { ...item, ...experienceData } : item
      )
    );
  }
  function removeExperience(id) {
    setExperiences((prevData) => prevData.filter((data) => data.id !== id));
  }

  function clearResume() {
    setPersonalDetails(exampleData.emptyInputs.personalDetails);

    setEducations([]);
    setSavedEducationItemList([]);
    setEducationDetails(exampleData.emptyInputs.education);

    setExperiences([]);
    setSavedExperienceItemList([]);
    setExperienceDetails(exampleData.emptyInputs.experience);

    setResumeWasCleared(true);
  }
  
  function loadExampleResume() {
    setPersonalDetails(exampleData.personalDetails);
    
    setEducations(exampleData.educations);
    setSavedEducationItemList(exampleData.educations.map((education) => { 
      return (
        {
          ...education,
          title: education.school,
          saved: true,
          temp: false,
        }
      )
    }));
    // setEducationDetails(exampleData.emptyInputs.education);
    
    setExperiences(exampleData.experiences);
    setSavedExperienceItemList(exampleData.experiences.map((experience) => { 
      return (
        {
          ...experience,
          title: experience.companyName,
          saved: true,
          temp: false,
        }
      )
    }));
    // setExperienceDetails(exampleData.emptyInputs.experience);
    
    setResumeWasCleared(true);
  }
  
  return (
    <div className='app'>
      <CVEditor
        personalDetailsValues={personalDetails}
        onPersonalDetailsChange={handlePersonalDetailsChange}

        clearResume={clearResume}
        loadExampleResume={loadExampleResume}
        resumeWasCleared={resumeWasCleared}
        setResumeWasCleared={setResumeWasCleared}

        educationDetails={educationDetails}
        onEducationDetailsChange={handleEducationDetailsChange}
        addEducation={addEducation}
        getEducation={getEducation}
        updateEducation={updateEducation}
        removeEducation={removeEducation}
        loadEducationDetails={loadEducationDetails}
        setCurrentEducationTargetId={setCurrentEducationTargetId}
        currentEducationTargetId={currentEducationTargetId}
        savedEducationItemList={savedEducationItemList}
        setSavedEducationItemList={setSavedEducationItemList}

        experienceDetails={experienceDetails}
        onExperienceDetailsChange={handleExperienceDetailsChange}
        addExperience={addExperience}
        getExperience={getExperience}
        updateExperience={updateExperience}
        removeExperience={removeExperience}
        loadExperienceDetails={loadExperienceDetails}
        setCurrentExperienceTargetId={setCurrentExperienceTargetId}
        currentExperienceTargetId={currentExperienceTargetId}
        savedExperienceItemList={savedExperienceItemList}
        setSavedExperienceItemList={setSavedExperienceItemList}
      />
      <Resume 
        personalDetailsValues={personalDetails}
        onEducationDetailsChange={handleEducationDetailsChange}
        educationDetails={educationDetails}
        educations={educations}
        experienceDetails={experienceDetails}
        experiences={experiences}
      />
    </div>
  )
}

export default App;
