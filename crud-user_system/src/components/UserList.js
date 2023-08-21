export default function UserItem({
    user,
    onEditClick,
    onDeleteClick
  }) {
    return (
      <li key={user.id}>
        {user.text }
        { user.username}
        { <img src={user.userImg} alt=""/>}
        <button onClick={() => onEditClick(user)}>Edit</button>
        <button onClick={() => onDeleteClick(user.id)}>Delete</button>
      </li>
    );
  }
  