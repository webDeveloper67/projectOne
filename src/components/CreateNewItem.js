import React, {useState} from 'react'

const CreateNewItem = ({onAddItem}) => {

  const [value, setValue] = useState('')

  const handleChange = e => {
    setValue(e.target.value)
  }

  const addItem = e => {
    e.preventDefault();
    onAddItem(value)
  }

  const inputIsEmpty = () => {
    return value === ''
  }
  return (
    <div>
      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={value}
          onChange={handleChange}
        />
        <button disabled={inputIsEmpty()}>Add</button>
      </form>
    </div>
  );
}

export default CreateNewItem;