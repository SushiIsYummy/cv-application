import '../styles/ActionButtons.css';

function ActionButtons({
  onDeleteButtonClick,
  onCancelButtonClick,
  onSaveButtonClick,
}) {
  return (
    <div className="action-buttons">
      <button type='button' className='delete-button' onClick={onDeleteButtonClick}>DELETE</button>
      <div className="cancel-save">
        <button type='button' className='cancel-button' onClick={onCancelButtonClick}>CANCEL</button>
        <button type='submit' className='save-button' onClick={onSaveButtonClick}>SAVE</button>
      </div>
    </div>
  );
}

export default ActionButtons;