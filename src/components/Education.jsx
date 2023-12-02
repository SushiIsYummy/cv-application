import '../styles/Education.css';
import EditCard from './EditCard';
import EditCardDropdown from './EditCardDropdown';
import InputGroup from './InputGroup';

function Education({
  addEducation,
  getEducation,
  updateEducation,
  removeEducation,
  educationDetails,
  currentTargetId,
  setCurrentTargetId,
  onEducationDetailsChange,
  loadEducationDetails,
  savedEducationItemList,
  setSavedEducationItemList,
  resumeWasCleared,
  setResumeWasCleared,
 }) {
  // const educationPropertyNames = ['school', 'address', 'degree', 'startDate', 'endDate'];
  return (
    <EditCardDropdown 
      cardTitle='Education' 
      itemTitle='school' 
      addItem={addEducation} 
      getItem={getEducation} 
      removeItem={removeEducation} 
      updateItem={updateEducation} 
      loadDetails={loadEducationDetails} 
      itemPropertyNames={educationDetails}
      setCurrentTargetId={setCurrentTargetId}
      currentTargetId={currentTargetId}
      savedItemList={savedEducationItemList}
      setSavedItemList={setSavedEducationItemList}
      resumeWasCleared={resumeWasCleared}
      setResumeWasCleared={setResumeWasCleared}
    >
      <InputGroup value={educationDetails.school} title='School' name='school' type='text' placeholder='School' onChange={onEducationDetailsChange} inputElement='input' required={true}/>
      <InputGroup value={educationDetails.address} title='Address' name='address' type='text' placeholder='Address' onChange={onEducationDetailsChange} inputElement='input'/>
      <InputGroup value={educationDetails.degree} title='Degree' name='degree' type='text' placeholder='Degree / Field of Study' onChange={onEducationDetailsChange} inputElement='input'/>
      <div className="date-of-study">
        <InputGroup value={educationDetails.startDate} title='Start Date' name='startDate' type='text' placeholder='Start Date' onChange={onEducationDetailsChange} inputElement='input'/>
        <InputGroup value={educationDetails.endDate} title='End Date' name='endDate' type='text' placeholder='End Date' onChange={onEducationDetailsChange} inputElement='input'/>
      </div>
    </EditCardDropdown>
  );
}

export default Education;