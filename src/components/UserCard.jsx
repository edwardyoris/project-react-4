import React from 'react'

const UserCard = ({ user, deleteUserId, setupdateInfo }) => {

    const handleEdit = () => {
        setupdateInfo(user)
    }
    return (
        <article>
            <h2>{`${user.firstname} ${user.lastname}`}</h2>
            <ul>
                <li><span>Email</span>{user.email}</li>
                <li><span>Birthday</span>{user.birthday}</li>
            </ul>
            <footer>
                <i onClick={handleEdit} className="fa-solid fa-user-pen"></i>
                <i onClick={() => deleteUserId(user.id)} className="fa-solid fa-user-xmark"></i>
            </footer>
        </article>
    )
}

export default UserCard