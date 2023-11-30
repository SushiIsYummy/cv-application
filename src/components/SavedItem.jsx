import '../styles/SavedItem.css';

function SavedItem({
  title,
  id,
  openEditView
}) {
  // let titleClass = title.toLowerCase().split(' ').join('-');
  // let myClassName = `edit-card ${titleClass}`;
  return (
    <button className={`saved-item`} id={id} onClick={openEditView}>
      {title}
    </button>
  );
}

export default SavedItem;