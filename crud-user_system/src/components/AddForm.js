import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUserForm ({
  user, email, img, onAddFormSubmit, onAddInputChange,onSecondChange,
  onImgChange
})
 
{
  const navigateHome = useNavigate();
  return (
    <>
      <div className='user_section'>
        <div className='form'>
          <form onSubmit={onAddFormSubmit}>
            <img src={img} />
            <label htmlFor='imgFile'>
              <FontAwesomeIcon icon={faSquarePlus} size='2xl' />
            </label>
            <input
              id='imgFile'
              name='imgFile'
              type='file'
              accept='image/*'
              defaultValue={img}
              onChange={onImgChange}
            />
            <br />
            <input
              name='user'
              type='text'
              placeholder='Enter Full Name '
              value={user}
              onChange={onAddInputChange}
            />
            <br />
            <input
              name='email'
              type='text'
              placeholder='Enter Job Title'
              value={email}
              onChange={onSecondChange}
            />
            <br />
            <button type='submit'>submit</button>
          </form>
        </div>
      </div>
    </>
  )
}
