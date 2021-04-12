import React from 'react'

const DeleteLastItem = ({onDeleteLastItem, buttonDisabled}) => {
  const handleDeleteLastItem = (e) => {
    onDeleteLastItem()
  }
  return(
    <button onClick={handleDeleteLastItem} disabled={buttonDisabled}>
      Delete Last Item
    </button>
  )
}

export default DeleteLastItem;