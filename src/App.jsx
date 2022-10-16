import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'

const baseURL = 'http://144.126.218.162:9000'

function App() {

  const [users, setusers] = useState()

  //Pasar info del useCard a FormUser
  const [updateInfo, setupdateInfo] = useState()

  const getAllUsers = () => {
    const URL = `${baseURL}/users/`
    axios.get(URL)
      .then(res => setusers(res.data))
      .catch(err => console.log(err))
  }

  //Get de todos los users 
  useEffect(() => {
    getAllUsers()
  }, [])


  //Nuevo usuario
  const creatNewUser = (data) => {
    const URL = `${baseURL}/users/`
    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  //Eliminar usuario
  const deleteUserId = (id) => {
    const URL = `${baseURL}/users/${id}/`
    axios.delete(URL)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  //Actualizar user 
  const updateUserId = (id, data) => {
    const URL = `${baseURL}/users/${id}/`
    axios.patch(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))

  }
  return (
    <div className="App">
      <h1>Users & Registration of new users</h1>
      <FormUsers
        creatNewUser={creatNewUser}
        updateInfo={updateInfo}
        updateUserId={updateUserId}
        setupdateInfo={setupdateInfo} />
      {
        users?.map(user => (
          <UserCard
            key={user.id}
            user={user}
            deleteUserId={deleteUserId}
            setupdateInfo={setupdateInfo} />
        ))
      }
    </div>
  )
}

export default App







