import '../styles/EditCard.css';
// import ActionButtons from './ActionButtons';

function EditCard({children, title}) {
  let titleClass = title.toLowerCase().split(' ').join('-');
  let myClassName = `edit-card ${titleClass}`;
  return (
    <section className={myClassName}>
      <form>
      <h1 className='title'>{title}</h1>
        {children}
      </form>
    </section>
  );
}

export default EditCard;