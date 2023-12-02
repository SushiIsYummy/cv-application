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
  inputElement,
}) {
  return (
    <div className='input-group'>
      <h1>{title}</h1>

      {inputElement === 'input' && <input 
        type={type} 
        name={name} 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        data-item-title={itemTitle}
      />}
      {inputElement === 'textarea' && <textarea 
        type={type} 
        name={name} 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        data-item-title={itemTitle}
        rows={5}
      />}
    </div>
  );
}

export default InputGroup;