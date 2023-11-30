import '../styles/PersonalDetails.css'
import EditCard from './EditCard';
import EditCardDropdown from './EditCardDropdown';
import InputGroup from './InputGroup';

function PersonalDetails({
  onPersonalDetailsChange,
  personalDetailsValues,
}) {
  // console.log(personalDetailsValues)
  return (
    <EditCard title="Personal Details">
      <div className="full-name">
        <InputGroup title='First Name' className='first-name' value={personalDetailsValues.firstName} name='firstName' type="text" placeholder='First Name' onChange={onPersonalDetailsChange}/>
        <InputGroup title='Last Name' className='last-name' value={personalDetailsValues.lastName} name='lastName' type="text" placeholder='Last Name' onChange={onPersonalDetailsChange}/>
      </div>
      <InputGroup title='Email' className='email' value={personalDetailsValues.email} name='email' type="email" placeholder='Email' onChange={onPersonalDetailsChange}/>
      <InputGroup title='Phone Number' className='phone-number' value={personalDetailsValues.phoneNumber} name='phoneNumber' type="tel" placeholder='Phone Number' onChange={onPersonalDetailsChange}/>
    </EditCard>
  );
}

export default PersonalDetails; 