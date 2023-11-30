import '../styles/InputGroup.css';

function InputGroup({
  title,
  itemTitle,
  type,
  value,
  name,
  placeholder,
  onChange,
  required,
}) {
  return (
    <div className='input-group'>
      <h1>{title}</h1>
      <input 
        type={type} 
        name={name} 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        data-item-title={itemTitle}
      />
    </div>
  );
}

export default InputGroup;