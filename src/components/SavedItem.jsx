import '../styles/SavedItem.css';

function SavedItem({
  title,
  id,
  openEditView
}) {
  return (
    <button className={`saved-item`} id={id} onClick={openEditView}>
      {title}
    </button>
  );
}

export default SavedItem;