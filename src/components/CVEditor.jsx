import PersonalDetails from './PersonalDetails';
import Education from './Education';
import Experience from './Experience';
import '../styles/CVEditor.css'

function CVEditor({
  onPersonalDetailsChange,
  personalDetailsValues,
  addEducation,
  getEducation,
  updateEducation,
  removeEducation,
  setCurrentEducationTargetId,
  currentEducationTargetId,
  onEducationDetailsChange,
  educationDetails,
  loadEducationDetails,
}) {
  return (
    <section className="cv-editor">
      <PersonalDetails 
        onPersonalDetailsChange={onPersonalDetailsChange}
        personalDetailsValues={personalDetailsValues}
      />
      <Education 
        addEducation={addEducation}
        getEducation={getEducation}
        updateEducation={updateEducation}
        removeEducation={removeEducation}
        educationDetails={educationDetails}
        onEducationDetailsChange={onEducationDetailsChange}
        setCurrentTargetId={setCurrentEducationTargetId}
        currentTargetId={currentEducationTargetId}
        loadEducationDetails={loadEducationDetails}
      />
      {/* <Experience></Experience> */}
    </section>
  );
}

export default CVEditor;