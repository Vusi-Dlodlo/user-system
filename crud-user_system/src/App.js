import { Fragment, useEffect, useState } from 'react'
import './App.css'
import EditForm from './components/EditForm'
import AddUserForm from './components/AddForm'
import { Link, useNavigate } from 'react-router-dom'
import { Routes, Route, Navigate } from 'react-router-dom'
import UserItem from './components/UserList'
export default function App () {

  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('users')
    if (savedUsers) {
      return JSON.parse(savedUsers)
    } else {
      return []
    }
  })
  const [user, setUser] = useState('')
  const [job, setJobTitle] = useState('')
  const [img, setImg] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState({})


  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  function handleAddInputChange (e) {
    setUser(e.target.value)
  }
  function handleNameInputChange (e) {
    setJobTitle(e.target.value)
  }
  function handleImgdInputChange (e) {
    const localImg = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(localImg)
    reader.onload = () => {
      setImg(reader.result)
    }
  }

  function handleEditInputChange (e) {
    setCurrentUser({ ...currentUser, text: e.target.value })
    console.log(currentUser)
  }
  function handleSecInputChange (e) {
    setCurrentUser({ ...currentUser, username: e.target.value })
    console.log(currentUser)
  }
  function handleImgInputChange (e) {
    const localImg = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(localImg)
    reader.onload = () => {
      setCurrentUser({ ...currentUser, userImg: reader.result })
    }

  }

  function handleAddFormSubmit (e) {
    e.preventDefault()

    if (user !== '') {
      setUsers([
        ...users,
        {
          id: 1 + Math.floor(Math.random() * 1000),
          text: user.trim(),
          username: job,
          userImg: img
        }
      ])
    }

    setUser('')
  }

  function handleEditFormSubmit (e) {
    e.preventDefault()

    handleUpdateUser(currentUser.id, currentUser)
  }

  function handleDeleteClick (id) {
    const removeItem = users.filter(user => {
      return user.id !== id
    })
    setUsers(removeItem)
  }

  function handleUpdateUser (id, updatedUser) {
    const updatedItem = users.map(user => {
      return user.id === id ? updatedUser : user
    })
    setIsEditing(false)
    setUsers(updatedItem)
  }

  function handleEditClick (user) {
    setIsEditing(true)
    setCurrentUser({ ...user })
  }

  const navigate = useNavigate();
  return (
    <>
    <div className='App'>
      {isEditing ? (
        <Fragment>
        <EditForm
          currentUser={currentUser}
          setIsEditing={setIsEditing}
          onEditInputChange={handleEditInputChange}
          onediSecond={handleSecInputChange}
          onEditImg={handleImgInputChange}
          onEditFormSubmit={handleEditFormSubmit}
        />
        </Fragment>
      ) : (
        <Fragment>
          <AddUserForm user={user} onAddFormSubmit={handleAddFormSubmit} onAddInputChange={handleAddInputChange} />
      </Fragment>
      )}
    </div>
    <ul className='user-list'>
        {users.map(user => (
          <UserItem
            user={user}
            username={user.job}
            userImg={user.img}
            onEditClick={handleEditClick}
            onDeleteClick={handleDeleteClick}
          />
        ))}
      </ul>


    </>

  )
}
