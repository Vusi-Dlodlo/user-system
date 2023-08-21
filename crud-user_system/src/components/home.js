import UserItem from './components/UserList'
export default function Homepage (users, onEditClick, onDelete, handleEditClick, handleDeleteClick) {
  return (
    <>

    </>
  )
}
/*

    <Routes>
      <Route path='/' element={<Homepage user={user}  />}/>
      <Route path='/add' element={<AddUserForm user={user} onAddFormSubmit={handleAddFormSubmit} onAddInputChange={handleAddInputChange} /> }/>
    </Routes>
<Routes>
<Route
  path='/'
  element={
    <UserList
      users={users}
      onDelete={handleDelete}
      onUpdate={handleUpdate}
      editRow={editRow}
    />
  }
/>
<Route
  path='/add'
  element={<AddUser users={users} onAdd={handleAdd} />}
/>
<Route path='/add' element={<Formedit onAdd={handleAdd} />} />
</Routes>

<div className="user_section">
<div className="backButton">
    <a href="" onClick={() => navigateHome("/")}> <FontAwesomeIcon icon={faArrowLeft} size="2xl" /></a>
</div>
<div className='form'>
  <form onSubmit={onAddFormSubmit}>
    <img src={img}/>
    <label htmlFor='imgFile'><FontAwesomeIcon icon={faSquarePlus} size="2xl" /></label>
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
    <br/>
    <button type='submit'>submit</button>
  </form>
</div>*/
