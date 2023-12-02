import '../styles/PersonalDetails.css'
import EditCard from './EditCard';
import EditCardDropdown from './EditCardDropdown';
import InputGroup from './InputGroup';

function PersonalDetails({
  onPersonalDetailsChange,
  personalDetailsValues,
}) {
  return (
    <EditCard title="Personal Details">
      <div className="full-name">
        <InputGroup title='First Name' className='first-name' value={personalDetailsValues.firstName} name='firstName' type="text" placeholder='First Name' onChange={onPersonalDetailsChange} inputElement={'input'}/>
        <InputGroup title='Last Name' className='last-name' value={personalDetailsValues.lastName} name='lastName' type="text" placeholder='Last Name' onChange={onPersonalDetailsChange} inputElement={'input'}/>
      </div>
      <InputGroup title='Email' className='email' value={personalDetailsValues.email} name='email' type="email" placeholder='Email' onChange={onPersonalDetailsChange} inputElement={'input'}/>
      <InputGroup title='Phone Number' className='phone-number' value={personalDetailsValues.phoneNumber} name='phoneNumber' type="tel" placeholder='Phone Number' onChange={onPersonalDetailsChange} inputElement={'input'}/>
      <InputGroup title='Linkedin URL' className='linkedin' value={personalDetailsValues.linkedin} name='linkedin' type="text" placeholder='Linkedin URL' onChange={onPersonalDetailsChange} inputElement={'input'}/>
      <InputGroup title='Github URL' className='github' value={personalDetailsValues.github} name='github' type="text" placeholder='GitHub URL' onChange={onPersonalDetailsChange} inputElement={'input'}/>
    </EditCard>
  );
}

export default PersonalDetails; 