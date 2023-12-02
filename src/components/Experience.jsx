import '../styles/Experience.css';
import EditCardDropdown from './EditCardDropdown';
import InputGroup from './InputGroup';

function Experience({
  addExperience,
  getExperience,
  updateExperience,
  removeExperience,
  experienceDetails,
  currentTargetId,
  setCurrentTargetId,
  onExperienceDetailsChange,
  loadExperienceDetails,
  savedExperienceItemList,
  setSavedExperienceItemList,
  resumeWasCleared,
  setResumeWasCleared,
}) {
  return (
    <EditCardDropdown
      cardTitle='Experience' 
      itemTitle='companyName' 
      addItem={addExperience} 
      getItem={getExperience} 
      removeItem={removeExperience} 
      updateItem={updateExperience} 
      loadDetails={loadExperienceDetails} 
      itemPropertyNames={experienceDetails}
      currentTargetId={currentTargetId}
      setCurrentTargetId={setCurrentTargetId}
      savedItemList={savedExperienceItemList}
      setSavedItemList={setSavedExperienceItemList}
      resumeWasCleared={resumeWasCleared}
      setResumeWasCleared={setResumeWasCleared}
    >
      <InputGroup value={experienceDetails.companyName} title='Company Name' name='companyName' type='text' placeholder='Company Name' onChange={onExperienceDetailsChange} inputElement='input'/>
      <InputGroup value={experienceDetails.positionTitle} title='Position Title' name='positionTitle' type='text' placeholder='Position Title' onChange={onExperienceDetailsChange} inputElement='input' required={true}/>
      <InputGroup value={experienceDetails.companyLocation} title='Company Location' name='companyLocation' type='text' placeholder='Company Location' onChange={onExperienceDetailsChange} inputElement='input'/>
      <div className="employment-date">
        <InputGroup value={experienceDetails.startDate} title='Start Date' name='startDate' type='text' placeholder='Start Date' onChange={onExperienceDetailsChange} inputElement='input'/>
        <InputGroup value={experienceDetails.endDate} title='End Date' name='endDate' type='text' placeholder='End Date' onChange={onExperienceDetailsChange} inputElement='input'/>
      </div>
      <InputGroup value={experienceDetails.achievements} title='Achievements' name='achievements' placeholder='Achievements' onChange={onExperienceDetailsChange} inputElement='textarea'/>
    </EditCardDropdown>
  );
}

export default Experience;