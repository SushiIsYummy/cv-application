import ActionButtons from './ActionButtons';
import '../styles/EditCardDropdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import { isEqual, property } from 'lodash';
import React from 'react';
import SavedItem from './SavedItem';

function EditCardDropdown({
  children, 
  cardTitle,
  addItem,
  getItem,
  updateItem,
  removeItem,
  itemPropertyNames,
  itemTitle,
  currentTargetId,
  setCurrentTargetId,
  savedItemList,
  setSavedItemList,
  loadDetails,
  resumeWasCleared,
  setResumeWasCleared,
  
}) {
  const [isActive, setActive] = useState(false);
  const [currentDisplay, setCurrentDisplay] = useState('list');
  
  const isList = currentDisplay === 'list';
  const isEdit = currentDisplay === 'edit';
  const propertyNames = Object.keys(itemPropertyNames);

  useEffect(() => {
    let itemDetails = getItem(currentTargetId);
    if (itemDetails) {
      let result = {};
      propertyNames.forEach((propertyName) => {
        result[propertyName] = itemDetails[propertyName];
      })
      if (currentTargetId) {
        loadDetails(result);
      }
    }
  }, [currentTargetId]);

  useEffect(() => {
    if (resumeWasCleared === true) {
      setCurrentDisplay('list');
      setResumeWasCleared(false);
    }
  }, [resumeWasCleared])

  function handleActiveChange() {
    setActive(!isActive);
  }

  function handleAddButtonClick(e) {
    let inputs = e.target.closest('.edit-card-dropdown').querySelectorAll('input, textarea');
    let result = {};
    let itemName = '';
    [...inputs].forEach((input) => {
      const { name, value } = input;
      // itemName = value;
      result[name] = '';
    });
    let randomId = crypto.randomUUID();
    // loadInputFields(result);
    setCurrentDisplay('edit');

    // add empty item
    addItem({ ...result, id: randomId });

    // empty input fields for new item
    let emptyItem = {};
    propertyNames.forEach((propertyName) => {
      emptyItem[propertyName] = '';
    })
    loadDetails(emptyItem);

    setCurrentTargetId(randomId);
    setSavedItemList((prevData) => [...prevData, {
      title: itemName,
      id: randomId,
      saved: false,
      temp: true,
    }]);
  }
  
  function handleDeleteClick() {
    removeItem(currentTargetId);
    setSavedItemList((prevData) => {
      return prevData.filter((item) => {
        return item.id !== currentTargetId;
      })
    })
    
    setCurrentDisplay('list');
  }

  function handleCancelClick() {
    let savedItemIndex = savedItemList.findIndex((item) => item.id === currentTargetId);
    if (savedItemIndex !== -1 && savedItemList[savedItemIndex].temp) {
      removeItem(currentTargetId);
      setSavedItemList((prevData) => {
        return prevData.filter((item) => {
          return item.id !== currentTargetId;
        })
      })
    }
    if (!isEqual(getItem(currentTargetId), getSavedItem(currentTargetId))) {
      updateItem(currentTargetId, getSavedItem(currentTargetId));
    }
    setCurrentDisplay('list');
  }

  function handleSavedItemClick(e) {
    setCurrentTargetId(e.target.id);
    setCurrentDisplay('edit');
  }

  function getSavedItem(savedItemId) {
    return savedItemList.find((savedItem) => savedItem.id === savedItemId);
  }

  function handleSaveClick(e) {
    e.preventDefault();
    let inputs = e.target.querySelectorAll('input, textarea');
    let result = {};
    let itemName = '';
    [...inputs].forEach((input) => {
      const { name, value } = input;
      if (name === itemTitle) {
        itemName = value;
      }
      result[name] = value;
    })
    updateItem(currentTargetId, result);
    // setInputFields(result);
    // let savedItemIndex = savedItemList.findIndex((item) => item.id === currentTargetId);
    setSavedItemList((prevData) => 
      prevData.map((item) =>
        item.id === currentTargetId ? { ...item, ...result, title: itemName, saved: true, temp: false } : item
      )
    )
    setCurrentDisplay('list');
    }
    
  let titleClass = cardTitle.toLowerCase().split(' ').join('-');
  let myClassName = `edit-card-dropdown ${titleClass}`;

  return (
    <section className={`${myClassName} ${isActive ? 'open' : ''}`}>
      <button className={`expand-button ${isActive ? 'open' : ''}`} onClick={handleActiveChange}>
        <h1 className='title'>{cardTitle}</h1>
        {!isActive && <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>}
        {isActive && <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>}
      </button>
      <form className={isActive && isEdit ? 'open' : ''} onSubmit={handleSaveClick}>
        {children}
        <ActionButtons 
          onCancelButtonClick={handleCancelClick}
          onDeleteButtonClick={handleDeleteClick}
          // onSaveButtonClick={handleSaveClick}
        />
      </form>
      <div className={`item-list ${isActive && isList ? 'open' : ''}`}>
        {savedItemList.map((item) => {
          return <SavedItem 
                    title={item.title} 
                    key={item.id} 
                    id={item.id} 
                    openEditView={handleSavedItemClick}
                  />
        })}
        <button className='add-button' onClick={handleAddButtonClick}>+ {cardTitle}</button>
      </div>
    </section>
  );
}

export default EditCardDropdown;