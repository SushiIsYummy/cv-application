import PersonalDetails from './PersonalDetails';
import Education from './Education';
import Experience from './Experience';
import '../styles/CVEditor.css'

function CVEditor() {
  return (
    <section className="cv-editor">
      <PersonalDetails></PersonalDetails>
      <Education></Education>
      <Experience></Experience>
    </section>
  );
}

export default CVEditor;