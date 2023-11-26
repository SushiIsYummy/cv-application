import '../styles/EditCard.css';
// import ActionButtons from './ActionButtons';

function EditCard({children, title, includeButtons}) {
  let titleClass = title.toLowerCase().split(' ').join('-');
  let myClassName = `edit-card ${titleClass}`;
  return (
    <section className={myClassName}>
      <form>
      <h1 className='title'>{title}</h1>
        {children}
      </form>
      {/* {includeButtons && <ActionButtons></ActionButtons>} */}
    </section>
  );
}

export default EditCard;