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
      // educationPropertyNames={educationPropertyNames}
    >
      <InputGroup value={educationDetails.school} title='School' name='school' type='text' placeholder='School' onChange={onEducationDetailsChange} required={true}/>
      <InputGroup value={educationDetails.address} title='Address' name='address' type='text' placeholder='Address' onChange={onEducationDetailsChange}/>
      <InputGroup value={educationDetails.degree} title='Degree' name='degree' type='text' placeholder='Degree / Field of Study' onChange={onEducationDetailsChange}/>
      <InputGroup value={educationDetails.startDate} title='Start Date' name='startDate' type='text' placeholder='Start Date' onChange={onEducationDetailsChange}/>
      <InputGroup value={educationDetails.endDate} title='End Date' name='endDate' type='text' placeholder='End Date' onChange={onEducationDetailsChange}/>
    </EditCardDropdown>
  );
}

export default Education;