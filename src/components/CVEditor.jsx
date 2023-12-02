import PersonalDetails from './PersonalDetails';
import Education from './Education';
import Experience from './Experience';
import '../styles/CVEditor.css'

function CVEditor({
  onPersonalDetailsChange,
  personalDetailsValues,

  clearResume,
  loadExampleResume,
  
  resumeWasCleared,
  setResumeWasCleared,

  addEducation,
  getEducation,
  updateEducation,
  removeEducation,
  setCurrentEducationTargetId,
  currentEducationTargetId,
  onEducationDetailsChange,
  educationDetails,
  loadEducationDetails,
  savedEducationItemList,
  setSavedEducationItemList,

  experienceDetails,
  onExperienceDetailsChange,
  addExperience,
  getExperience,
  updateExperience,
  removeExperience,
  loadExperienceDetails,
  setCurrentExperienceTargetId,
  currentExperienceTargetId,
  savedExperienceItemList,
  setSavedExperienceItemList,
}) {
  return (
    <section className="cv-editor">
      <div className="clear-and-load-buttons">
        <button className='clear-button' onClick={clearResume}>Clear Resume</button>
        <button className='load-button' onClick={loadExampleResume}>Load Example</button>
      </div>
      <PersonalDetails 
        onPersonalDetailsChange={onPersonalDetailsChange}
        personalDetailsValues={personalDetailsValues}
        resumeWasCleared={resumeWasCleared}
        setResumeWasCleared={setResumeWasCleared}
      />
      <Education 
        educationDetails={educationDetails}
        onEducationDetailsChange={onEducationDetailsChange}
        addEducation={addEducation}
        getEducation={getEducation}
        updateEducation={updateEducation}
        removeEducation={removeEducation}
        setCurrentTargetId={setCurrentEducationTargetId}
        currentTargetId={currentEducationTargetId}
        loadEducationDetails={loadEducationDetails}
        savedEducationItemList={savedEducationItemList}
        setSavedEducationItemList={setSavedEducationItemList}
        resumeWasCleared={resumeWasCleared}
        setResumeWasCleared={setResumeWasCleared}
      />
      <Experience
        experienceDetails={experienceDetails}
        onExperienceDetailsChange={onExperienceDetailsChange}
        addExperience={addExperience}
        getExperience={getExperience}
        updateExperience={updateExperience}
        removeExperience={removeExperience}
        setCurrentTargetId={setCurrentExperienceTargetId}
        currentTargetId={currentExperienceTargetId}
        loadExperienceDetails={loadExperienceDetails}
        savedExperienceItemList={savedExperienceItemList}
        setSavedExperienceItemList={setSavedExperienceItemList}
        resumeWasCleared={resumeWasCleared}
        setResumeWasCleared={setResumeWasCleared}
      />
    </section>
  );
}

export default CVEditor;