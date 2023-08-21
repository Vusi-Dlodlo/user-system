import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function EditForm ({
  currentUser,
  setIsEditing,
  onediSecond,
  onEditImg,
  onEditInputChange,
  onEditFormSubmit
}) {
  return (
    <>
    <div className="form">
    <form onSubmit={onEditFormSubmit}>
      <br />
      <img src={currentUser.img} />
      <label htmlFor='imgFile'>
      <FontAwesomeIcon icon={faSquarePlus} size='2xl' />
      </label>
      <input
        id='imgFile'
        name='imgFile'
        type='file'
        accept='image/*'
        defaultValue={currentUser.img}
        onChange={onEditImg}
      />
      <br />
      <input
        name='updateName'
        type='text'
        placeholder='Update full name'
        value={currentUser.text}
        onChange={onEditInputChange}
      />
      <br />
      <input
        name='updateUSer'
        type='text'
        placeholder='Update title'
        value={currentUser.username}
        onChange={onediSecond}
      />
      <br />
      <button type='submit' onClick={onEditFormSubmit}>
        Update
      </button>
      <button onClick={() => setIsEditing(false)}>Cancel</button>
    </form>
    </div>
    </>
  )
}
