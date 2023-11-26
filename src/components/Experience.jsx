import '../styles/Experience.css';
import EditCard from './EditCard';

function Experience() {
  return (
    <EditCard title="Experience" includeButtons={true}>
      <input type="text" placeholder='Company Name'/>
      <input type="text" placeholder='Position Title'/>
      <input type="text" placeholder='Start Date'/>
      <input type="text" placeholder='End Date'/>
      <input type="text" placeholder='Description'/>
    </EditCard>
  );
}

export default Experience;