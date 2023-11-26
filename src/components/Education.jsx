import '../styles/Education.css';
import EditCard from './EditCard';
function Education() {
  return (
    <EditCard title="Education">
      <input type="text" placeholder='School'/>
      <input type="text" placeholder='Degree / Field of Study'/>
      <input type="text" placeholder='Start Date'/>
      <input type="text" placeholder='End Date'/>
    </EditCard>
  );
}

export default Education;