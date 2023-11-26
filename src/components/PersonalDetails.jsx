import '../styles/PersonalDetails.css'
import EditCard from './EditCard';

function PersonalDetails() {
  return (
    <EditCard title="Personal Details" includeButtons={false}>
      <div className="full-name">
        <input className='first-name' type="text" placeholder='First Name'/>
        <input className='last-name' type="text" placeholder='Last Name'/>
      </div>
      <input type="email" placeholder='Email'/>
      <input type="tel" placeholder='Phone Number'/>
    </EditCard>
  );
}

export default PersonalDetails;